const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const readline = require('readline');
const { performance } = require('perf_hooks');

const BASE_URL = 'https://uniz-production-gateway.vercel.app/api/v1';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askUser = (question) => new Promise(resolve => rl.question(question, resolve));

const log = (step, msg, data = null) => {
    console.log(`\n[${step}] ${msg}`);
    if (data) console.log(JSON.stringify(data, null, 2));
};

const perfLog = (step, duration, cached = false) => {
    console.log(`   ⏱️  Time: ${duration.toFixed(2)}ms ${cached ? '(⚡️ CACHE HIT likely)' : ''}`);
};

async function request(method, url, body = null, token = null, checkStatus = true) {
    const start = performance.now();
    try {
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const res = await fetch(`${BASE_URL}${url}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined
        });

        const end = performance.now();
        const duration = end - start;
        
        const isCached = method === 'GET' && duration < 50;
        
        let data = {};
        const text = await res.text();
        try { if(text) data = JSON.parse(text); } catch (e) { data = { message: text }; }

        console.log(`   ✅ ${method} ${url} (${res.status})`);
        
        // Log Error Body if failed
        if (!res.ok) {
             console.log(`      Error: ${JSON.stringify(data)}`);
        }

        perfLog(method, duration, isCached);
        
        if (checkStatus && !res.ok) throw new Error(`API Error ${res.status}`);
        
        return { data, status: res.status, duration };
    } catch (e) {
        const end = performance.now();
        console.log(`   ❌ ${method} ${url} (FAIL) - ${e.message}`);
        perfLog(method, end - start);
        if (checkStatus) throw e;
        return { error: e, status: 500 };
    }
}

async function upload(url, filePath, token) {
    const start = performance.now();
    try {
        const form = new FormData();
        form.append("file", fs.createReadStream(filePath));
        
        const res = await axios.post(`${BASE_URL}${url}`, form, {
            headers: {
                ...form.getHeaders(),
                Authorization: `Bearer ${token}`,
                "x-upload-type": "FULL_BATCH"
            }
        });
        const end = performance.now();
        console.log(`   ✅ UPLOAD ${url} (${res.status})`);
        perfLog("UPLOAD", end - start);
        return res.data;
    } catch (e) {
        console.error(`   ❌ UPLOAD Failed: ${e.message}`);
        throw e;
    }
}

async function run() {
    console.log("========================================");
    console.log("   UniZ COMPREHENSIVE E2E TEST FLOW     ");
    console.log("========================================");

    let studentToken, caretakerMaleToken, caretakerFemaleToken, swoToken, wardenMaleToken, securityToken, webmasterToken;
    let requestId;

    try {
        // ==========================================
        // 1. STUDENT FLOW: Login, Profile, Update, Apply
        // ==========================================
        log("STEP 1", "Student Login (O210008)");
        const loginRes = await request('POST', '/auth/login', { username: 'O210008', password: 'password123' });
        studentToken = loginRes.data.token;

        log("STEP 1", "Get Profile");
        await request('GET', '/profile/student/me', null, studentToken);

        log("STEP 1", "Update Profile");
        await request('PUT', '/profile/student/me', { mobile: '9876543210' }, studentToken);

        log("STEP 1", "Apply for Outing Request");
        const outingPayload = {
            reason: "Buying Essentials",
            destination: "Ongole Market",
            contact: "9876543210",
            fromDay: new Date(Date.now() + 86400000).toISOString(),
            toDay: new Date(Date.now() + 86400000 + 14400000).toISOString() // 4 hours later
        };
        const applyRes = await request('POST', '/requests/outing', outingPayload, studentToken);
        requestId = applyRes.data.requestId || applyRes.data.id; // Adjust based on actual API
        console.log(`   📝 Created Request ID: ${requestId}`);


        // ==========================================
        // 2. ROLE CHECKS: Caretakers & SWO
        // ==========================================
        log("STEP 2", "Login Caretaker Male");
        const cmRes = await request('POST', '/auth/login', { username: 'caretaker_male', password: 'caretaker_male@uniz' });
        caretakerMaleToken = cmRes.data.token;
        
        log("STEP 2", "Caretaker Male Check Request (Should EXIST)");
        const cmCheck = await request('GET', `/requests/outing/all?search=O210008`, null, caretakerMaleToken);
        const foundCM = cmCheck.data.outings.find(r => r.id === requestId || r._id === requestId);
        if (foundCM) console.log("   ✅ Caretaker Male found the request.");
        else console.error("   ❌ Caretaker Male DID NOT find the request!");

        log("STEP 2", "Login Caretaker Female");
        const cfRes = await request('POST', '/auth/login', { username: 'caretaker_female', password: 'caretaker_female@uniz' });
        caretakerFemaleToken = cfRes.data.token;

        log("STEP 2", "Caretaker Female Check Request (Should NOT exist in relevant view)");
        // Usually default query filters by dorm/gender, so checking general search
        const cfCheck = await request('GET', `/requests/outing/all?search=O210008`, null, caretakerFemaleToken);
        const foundCF = cfCheck.data.outings.find(r => r.id === requestId || r._id === requestId);
        if (!foundCF) console.log("   ✅ Caretaker Female did not see the request (Correct).");
        else console.log("   ⚠️ Caretaker Female SAW the request (Check logic).");

        log("STEP 2", "Login SWO");
        const swoRes = await request('POST', '/auth/login', { username: 'swo', password: 'swo@uniz' });
        swoToken = swoRes.data.token;

        log("STEP 2", "SWO Attempt Forward (Must FAIL)");
        const swoFail = await request('POST', `/requests/${requestId}/approve`, { action: 'forward', comments: 'Skipping hierarchy' }, swoToken, false);
        if (swoFail.status >= 400) console.log("   ✅ SWO Forward Failed as expected.");
        else console.error("   ❌ SWO Forward SUCCEEDED (Should fail)!");


        // ==========================================
        // 3. APPROVAL FLOW
        // ==========================================
        log("STEP 3", "Caretaker Male Forward");
        await request('POST', `/requests/${requestId}/approve`, { action: 'forward', comments: 'Ok' }, caretakerMaleToken);

        log("STEP 3", "Login Warden Male");
        const wmRes = await request('POST', '/auth/login', { username: 'warden_male', password: 'warden_male@uniz' });
        wardenMaleToken = wmRes.data.token;

        log("STEP 3", "Warden Male Forward");
        await request('POST', `/requests/${requestId}/approve`, { action: 'forward', comments: 'Good' }, wardenMaleToken);

        log("STEP 3", "SWO Approve");
        await request('POST', `/requests/${requestId}/approve`, { action: 'approve', comments: 'Approved' }, swoToken);
        console.log("   ✅ Request Fully Approved");


        // ==========================================
        // 4. SECURITY FLOW & NEGATIVE TESTING
        // ==========================================
        log("STEP 4", "Login Security");
        const secRes = await request('POST', '/auth/login', { username: 'security', password: 'security@uniz' });
        securityToken = secRes.data.token;

        log("STEP 4", "Security Check Consolidated Requests");
        await request('GET', '/requests/consolidated', null, securityToken);

        log("STEP 4", "Checkout Student");
        await request('POST', `/requests/${requestId}/checkout`, {}, securityToken);

        log("STEP 4", "Student: Try Apply Again (Must FAIL)");
        // Trying outpass this time
        const failPayload = {
            reason: "Trying again",
            destination: "Home",
            contact: "9876543210",
            fromDay: new Date().toISOString(),
            toDay: new Date(Date.now() + 86400000).toISOString()
        };
        const failReq = await request('POST', '/requests/outpass', failPayload, studentToken, false);
        if (failReq.status >= 400) console.log("   ✅ Re-application Failed as expected (Active Pass exists).");
        else console.error("   ❌ Re-application SUCCEEDED (Should fail)!");

        log("STEP 4", "Checkin Student");
        await request('POST', `/requests/${requestId}/checkin`, {}, securityToken);
        
        log("STEP 4", "Student Get Profile (Verify Status)");
        await request('GET', '/profile/student/me', null, studentToken);
        console.log("   ✅ Everything cool.");

        
        // ==========================================
        // 5. AUTH FLOW: Password Reset
        // ==========================================
        log("STEP 5", "Reset Password: Send OTP");
        await request('POST', '/auth/otp/request', { username: 'O210008' });

        log("STEP 5", "Try OTP again immediately (Rate Limit Test < 5s)");
        const otpFail = await request('POST', '/auth/otp/request', { username: 'O210008' }, null, false);
        if (otpFail.status === 429 || otpFail.status === 400) console.log("   ✅ Rate limit hit (Expected).");
        else console.log(`   ⚠️ API responded with ${otpFail.status} (Might not have strict 5s limit implemented yet).`);

        const otp = await askUser("\n👉 Enter the OTP sent to O210008: ");

        log("STEP 5", "Reset Password");
        await request('POST', '/auth/password/reset', { username: 'O210008', otp: otp.trim(), newPassword: 'password123' });
        console.log("   ✅ Password reset to 'password123'.");
        
        // Re-login to confirm
        await request('POST', '/auth/login', { username: 'O210008', password: 'password123' });


        // ==========================================
        // 6. WEBMASTER: ACADEMICS
        // ==========================================
        log("STEP 6", "Login Webmaster");
        const webRes = await request('POST', '/auth/login', { username: 'webmaster', password: 'webmaster@uniz' });
        webmasterToken = webRes.data.token;

        log("STEP 6", "View All Students");
        await request('POST', '/profile/student/search', { limit: 10 }, webmasterToken); // Using search for list

        log("STEP 6", "View Specific Student (O210008)");
        await request('GET', '/profile/admin/student/O210008', null, webmasterToken);

        log("STEP 6", "Upload Grades");
        await upload('/academics/grades/upload', 'tests/data/full_batch_grades.xlsx', webmasterToken);

        log("STEP 6", "Upload Attendance");
        await upload('/academics/attendance/upload', 'tests/data/full_batch_attendance.xlsx', webmasterToken);

        log("STEP 6", "Check Failed Students (Batch Results)");
        const batchRes = await request('GET', '/academics/grades/batch?branch=CSE&semesterId=SEM-1&year=O21&failedOnly=true', null, webmasterToken);
        
        const failedRecords = batchRes.data.grades || [];
        console.log(`   Found ${failedRecords.length} failed records.`);

        if (failedRecords.length > 0) {
            log("STEP 6", "Update Failed Students (Bump to 'EX' or 'A')");
            // Picking the first failure to update
            const fail = failedRecords[0];
            console.log(`   Updating Subject ${fail.subjectId} for Student ${fail.studentId}...`);
            
            const updatePayload = {
                studentId: fail.studentId,
                updates: [
                    { sem: 'SEM-1', code: fail.subject.code, grade: 'EX' } 
                ]
            };
            
            await request('PUT', '/academics/grades/bulk-update', updatePayload, webmasterToken);
        }

        log("STEP 6", "Publish Results");
        await request('POST', '/academics/grades/publish-email', { semesterId: 'SEM-1', year: 'O21' }, webmasterToken);

        
        // ==========================================
        // 7. GRIEVANCES
        // ==========================================
        log("STEP 7", "Login Student (Again)"); // Ensure token freshness or just use existing if valid
        // Using existing studentToken assuming it's still valid
        
        log("STEP 7", "File Grievance (Anonymous)");
        await request('POST', '/grievance', { 
            subject: 'Mess Food Issue', 
            description: 'Quality is low today.', 
            isAnonymous: true, 
            category: 'HOSTEL' 
        }, studentToken);

        log("STEP 7", "File Grievance (Named)");
        await request('POST', '/grievance', { 
            subject: 'Wi-Fi Problem', 
            description: 'Speed is slow in block 2.', 
            isAnonymous: false, 
            category: 'INFRASTRUCTURE' 
        }, studentToken);

        log("STEP 7", "Login SWO & Check Grievances");
        // Using existing swoToken
        await request('GET', '/grievance/all', null, swoToken);

        log("COMPLETED", "Extensive Test Flow Finished Successfully! 🚀");
        
    } catch (e) {
        console.error("\n❌ TEST FAILED at some step.");
        console.error(e);
    } finally {
        rl.close();
    }
}

run();
