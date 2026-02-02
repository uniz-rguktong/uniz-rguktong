const fs = require('fs');
const FormData = require('form-data');
const axios = require('axios');

const BASE_URL = 'https://uniz-production-gateway.vercel.app/api/v1';

// Colors
const C = {
    green: "\x1b[32m",
    red: "\x1b[31m",
    blue: "\x1b[34m",
    cyan: "\x1b[36m",
    reset: "\x1b[0m",
    yellow: "\x1b[33m"
};

const log = (msg, color = C.reset) => console.log(`${color}${msg}${C.reset}`);

// Standard Fetch Helper
async function request(method, endpoint, body = null, token = null) {
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined
        });

        const text = await res.text();
        let data = {};
        try { data = JSON.parse(text); } catch (e) { data = { message: text }; }

        if (!res.ok) {
            throw new Error(`API Error ${res.status}: ${JSON.stringify(data)}`);
        }
        return data;
    } catch (e) {
        if (e.cause && e.cause.code === 'ECONNREFUSED') {
             throw new Error("Connection Refused! Is the server running?");
        }
        throw e;
    }
}

// Upload Helper using Axios (Fetch is tricky for Multipart/FormData in Node < 20 sometimes, Axios is reliable)
// User mentioned standard axios in node -e test, so we import axios.
// If axios is creating issues, we fall back. But user's env has axios.
async function uploadFile(endpoint, filePath, token) {
    try {
        const form = new FormData();
        form.append("file", fs.createReadStream(filePath));
        
        const res = await axios.post(`${BASE_URL}${endpoint}`, form, {
            headers: {
                ...form.getHeaders(),
                Authorization: `Bearer ${token}`,
                "x-upload-type": "FULL_BATCH" // Required for this specific logic
            }
        });
        return res.data;
    } catch (e) {
        throw new Error(`Upload Failed: ${e.message} ${JSON.stringify(e.response?.data || {})}`);
    }
}

async function run() {
    log("\n🚀 UniZ Full Flow Test: Academic & Outpass\n", C.cyan);

    // ==========================================
    // PHASE 1: ACADEMIC UPLOADS (Webmaster)
    // ==========================================
    log("🔹 [Phase 1] Academic Uploads (Webmaster)...", C.blue);
    let webmasterToken;
    try {
        const res = await request('POST', '/auth/login', { username: 'webmaster', password: 'webmaster@uniz' });
        webmasterToken = res.token;
        log("✅ Webmaster Logged In", C.green);

        // Upload Grades
        if (fs.existsSync('tests/data/full_batch_grades.xlsx')) {
            log("📤 Uploading Grades...", C.blue);
            await uploadFile('/academics/grades/upload', 'tests/data/full_batch_grades.xlsx', webmasterToken);
            log("✅ Grades Uploaded", C.green);
        } else {
            log("⚠️ Grades file not found in tests/data!", C.yellow);
        }

        // Upload Attendance
        if (fs.existsSync('tests/data/full_batch_attendance.xlsx')) {
            log("📤 Uploading Attendance...", C.blue);
            await uploadFile('/academics/attendance/upload', 'tests/data/full_batch_attendance.xlsx', webmasterToken);
            log("✅ Attendance Uploaded", C.green);
        } else {
             log("⚠️ Attendance file not found in tests/data!", C.yellow);
        }

    } catch (e) {
        log(`❌ Academic Phase Failed: ${e.message}`, C.red);
        // Continue to Phase 2? Yes.
    }

    // ==========================================
    // PHASE 2: STUDENT VIEW (Academics)
    // ==========================================
    log("\n🔹 [Phase 2] Student Academic View...", C.blue);
    let studentToken;
    try {
        // Login Fallback Logic
        try {
            const res = await request('POST', '/auth/login', { username: 'O210008', password: '123456' });
            studentToken = res.token;
        } catch {
             const res = await request('POST', '/auth/login', { username: 'O210008', password: 'password123' });
             studentToken = res.token;
        }
        log("✅ Student Logged In", C.green);

        // Check Grades (Endpoint is /grades, filtered by token)
        const grades = await request('GET', '/academics/grades', null, studentToken);
        log(`✅ Grades Fetched: ${grades.length || 0} records`, C.green);

        // Check Attendance
        const att = await request('GET', '/academics/attendance', null, studentToken);
        log(`✅ Attendance Fetched: ${att.length || 0} records`, C.green);

    } catch (e) {
        log(`❌ Student Academic Phase Failed: ${e.message}`, C.red);
    }


    // ==========================================
    // PHASE 3: OUTPASS FLOW (With Conflict Check)
    // ==========================================
    log("\n🔹 [Phase 3] Outpass Lifecycle...", C.blue);
    
    // 1. Profile & Gender Check
    let gender = 'Male'; 
    try {
        const profile = await request('GET', '/profile/student/me', null, studentToken);
        if (profile.gender) gender = profile.gender;
        else {
             // Try to set gender if missing
             try {
                await request('PUT', '/profile/student/update', { gender: 'Male' }, studentToken);
                gender = 'Male';
             } catch(updErr) {}
        }
    } catch (e) {}

    // 2. Clear Active Requests (Reset State if needed/possible)
    // Actually, we want to Resume if active. Or if completed, start new.
    let requestId;
    
    // Caretaker Token for Checks
    const caretakerUser = gender.toLowerCase() === 'female' ? 'caretaker_female' : 'caretaker_male';
    let caretakerToken;
    try {
        const res = await request('POST', '/auth/login', { username: caretakerUser, password: `${caretakerUser}@uniz` });
        caretakerToken = res.token;
    } catch(e) { log(`❌ Caretaker Login Failed`, C.red); return; }

    log("🔹 Checking Existing Requests...", C.blue);
    try {
        const outpassesRes = await request('GET', `/requests/outpass/all?search=O210008`, null, caretakerToken);
        const outingsRes = await request('GET', `/requests/outing/all?search=O210008`, null, caretakerToken);
        const allRequests = [...(outpassesRes.outpasses || []), ...(outingsRes.outings || [])];
        const active = allRequests.find(r => !r.is_rejected && !r.is_expired && !r.checked_in_time);

        if (active) {
            requestId = active._id || active.id;
            // Infer status
            let status = "PENDING";
            if (active.checked_out_time) status = "CHECKED_OUT";
            else if (active.is_approved) status = "APPROVED";
            log(`⚠️ Found active request ${requestId} (${status}). Resuming...`, C.yellow);
        } else {
            // Create New
            const payload = {
                reason: "Full Flow Test",
                destination: "Test Dest",
                contact: "9999999999",
                fromDay: new Date(Date.now() + 86400000).toISOString(),
                toDay: new Date(Date.now() + 172800000).toISOString()
            };
            const res = await request('POST', '/requests/outpass', payload, studentToken);
            requestId = res.id;
            log(`✅ Created New Outpass: ${requestId}`, C.green);
        }
    } catch (e) {
        log(`❌ Setup Failed: ${e.message}`, C.red);
        if(e.message.includes("409")) log("   (Conflict persists without visible active request?)", C.red);
        return;
    }

    // 3. Verify Constraints (Try to create another)
    log("🔹 Verifying Request Constraints...", C.blue);
    try {
         await request('POST', '/requests/outpass', { 
             reason: "Fail", destination: "X", contact: "0", 
             fromDay: new Date().toISOString(), toDay: new Date().toISOString() 
         }, studentToken);
         log("❌ CONSTRAINT FAILURE: Second request was allowed!", C.red);
    } catch (e) {
        if(e.message.includes("409")) log("✅ Constraint Verified (409 Conflict)", C.green);
        else log(`⚠️ Unexpected Error on Second Request: ${e.message}`, C.yellow);
    }

    // 4. Approval Chain
    const tryApprove = async (role, token) => {
        try {
            await request('POST', `/requests/${requestId}/approve`, { comments: "OK" }, token);
            log(`✅ ${role} Approved`, C.green);
        } catch (e) {
            // Ignore 409 (Already Approved)
            if(e.message.includes("409")) log(`ℹ️ ${role} already approved (Skipped)`, C.yellow);
            else log(`⚠️ ${role} Failed: ${e.message}`, C.yellow);
        }
    };

    // Caretaker
    await tryApprove("Caretaker", caretakerToken);

    // Warden
    const wardenUser = gender.toLowerCase() === 'female' ? 'warden_female' : 'warden_male';
    try {
        const { token } = await request('POST', '/auth/login', { username: wardenUser, password: `${wardenUser}@uniz` });
        await tryApprove("Warden", token);
    } catch(e) { log(`❌ Warden Login Failed`, C.red); }

    // SWO
    try {
        const { token } = await request('POST', '/auth/login', { username: 'swo', password: 'swo@uniz' });
        await tryApprove("SWO", token);
    } catch(e) { log(`❌ SWO Login Failed`, C.red); }

    // Security
    let securityToken;
    try {
        const { token } = await request('POST', '/auth/login', { username: 'security', password: 'security@uniz' });
        securityToken = token;
        
        // Checkout
        try {
            await request('POST', `/requests/${requestId}/checkout`, {}, securityToken);
            log("✅ Security Check-Out", C.green);
        } catch(e) { /* Ignore if already checked out or error? */ }
        
        // Checkin
        try {
            await request('POST', `/requests/${requestId}/checkin`, {}, securityToken);
            log("✅ Security Check-In", C.green);
        } catch(e) {  }

    } catch(e) { log(`❌ Security Failed`, C.red); }

    // --- FINAL VERIFICATION ---
    log("\n🔹 Final Verification: Correct Closure...", C.blue);
    try {
        const outpassesRes = await request('GET', `/requests/outpass/all?search=O210008`, null, caretakerToken);
        const outingsRes = await request('GET', `/requests/outing/all?search=O210008`, null, caretakerToken);
        const allRequests = [...(outpassesRes.outpasses || []), ...(outingsRes.outings || [])];
        const active = allRequests.find(r => !r.is_rejected && !r.is_expired && !r.checked_in_time);
        
        if (active) {
            log(`❌ FINAL CHECK FAILED: Request ${active._id || active.id} is still ACTIVE!`, C.red);
        } else {
            log(`✅ FINAL CHECK PASSED: No active requests found.`, C.green);
        }
    } catch (e) {
        log(`⚠️ Final verify failed: ${e.message}`, C.yellow);
    }
    
    log("\n✨ Complete System Test Finished!", C.cyan);
}

run();
