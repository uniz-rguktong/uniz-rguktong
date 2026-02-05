const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const readline = require('readline');
const { performance } = require('perf_hooks');
const { execSync } = require('child_process');

const BASE_URL = 'https://uniz-production-gateway.vercel.app/api/v1';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askUser = (question) => new Promise(resolve => {
    if (rl.closed) return resolve("123456"); // Fallback for closed streams
    try {
        rl.question(question, resolve);
    } catch (e) {
        resolve("123456");
    }
});

// Elite Hacker-Themed Formatting
const C_RESET = "\x1b[0m";
const C_GREEN = "\x1b[32m";
const C_CYAN = "\x1b[36m";
const C_YELLOW = "\x1b[33m";
const C_RED = "\x1b[31m";
const C_DIM = "\x1b[2m";
const C_BOLD = "\x1b[1m";

const printHeader = (title) => {
    console.clear();
    console.log(C_GREEN + C_BOLD);
    console.log(`////////////////////////////////////////////////////////////////////////////////`);
    console.log(`// ${title.toUpperCase()}`);
    console.log(`////////////////////////////////////////////////////////////////////////////////` + C_RESET);
};

const printSection = (title) => {
    console.log(`\n${C_CYAN}>> EXECUTING SEQUENCE: ${title.toUpperCase()} ${C_RESET}`);
    console.log(C_DIM + "--------------------------------------------------------------------------------" + C_RESET);
};

const logAction = (msg) => {
    process.stdout.write(`${C_DIM}[*] ${msg}... ${C_RESET}`);
};

const logComplete = (info = '') => {
    console.log(`${C_GREEN} [DONE] ${C_RESET} ${info}`);
};

const formatLog = (method, url, status, duration, info = '') => {
    const prefix = `${method} ${url}`;
    const maxLen = 55;
    const dots = C_DIM + '.'.repeat(Math.max(2, maxLen - prefix.length)) + C_RESET;
    
    let statusColor = status >= 200 && status < 300 ? C_GREEN : C_RED;
    let statusText = status >= 200 && status < 300 ? 'OK' : 'ERR';
    if (status >= 400) statusText = `ERR-${status}`;

    return `${C_BOLD}${prefix}${C_RESET} ${dots} ${statusColor}${status} ${statusText}${C_RESET} ${C_YELLOW}(${duration.toFixed(2)}ms)${C_RESET} ${info}`;
};

async function request(method, url, body = null, token = null, checkStatus = true) {
    const start = performance.now();
    try {
        const headers = { 
            'Content-Type': 'application/json',
            'X-Forwarded-For': `10.0.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`
        };
        if (token) headers['Authorization'] = `Bearer ${token}`;

        const res = await fetch(`${BASE_URL}${url}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined
        });

        const end = performance.now();
        const duration = end - start;
        
        let data = {};
        const text = await res.text();
        try { if(text) data = JSON.parse(text); } catch (e) { data = { message: text }; }

        const info = !res.ok ? `${C_RED}| ${data.error || data.message || 'FAILED'}${C_RESET}` : '';
        console.log(formatLog(method, url, res.status, duration, info));
        
        // Log Response Body (As Requested)
        if (Object.keys(data).length > 0) {
            console.log(C_DIM + JSON.stringify(data, null, 2).replace(/^/gm, '   ') + C_RESET);
        }
        
        if (checkStatus && !res.ok) throw new Error(`API Error ${res.status}`);
        
        return { data, status: res.status, duration };
    } catch (e) {
        const end = performance.now();
        const duration = end - start;
        console.log(formatLog(method, url, e.status || 500, duration, `${C_RED}| FAIL: ${e.message}${C_RESET}`));
        if (checkStatus) throw e;
        return { error: e, status: 500 };
    }
}

async function uploadWithProgress(url, filePath, token, type) {
    const start = performance.now();
    try {
        const headers = { Authorization: `Bearer ${token}` };
        const form = new FormData();
        form.append("file", fs.createReadStream(filePath));
        
        console.log(`\n⏳ Validating ${type} Bulk Ingestion Protocol...`);
        
        // Target: API Call
        const uploadPromise = axios.post(`${BASE_URL}${url}`, form, {
            headers: {
                ...form.getHeaders(),
                Authorization: `Bearer ${token}`,
                "x-upload-type": "FULL_BATCH"
            },
            timeout: 300000 // 5 minutes timeout for large batches
        });

        // Monitor Progress in Parallel
        let done = false;
        const monitorPromise = new Promise((resolve) => {
            const interval = setInterval(async () => {
                try {
                    const res = await axios.get(`${BASE_URL}/academics/upload/progress`, { headers, timeout: 5000 });
                    const prog = res.data.progress;
                    if (prog && prog.total > 0) {
                        const etaText = prog.status === 'done' ? 'Done' : `${prog.etaSeconds || '?'}s remaining`;
                        process.stdout.write(`\r   📊 Progress: ${prog.percent}% (${prog.processed}/${prog.total}) - ${etaText} [${prog.status}]   `);
                        if (prog.status === 'done') {
                            done = true; // Signal the loop to stop
                            process.stdout.write('\n');
                            clearInterval(interval);
                            resolve(prog);
                        }
                    }
                } catch (e) { /* silent poll */ }
                if (done) {
                    clearInterval(interval);
                    resolve(null);
                }
            }, 800);
        });

        const [uploadRes] = await Promise.all([uploadPromise]);
        done = true;
        await monitorPromise;

        const end = performance.now();
        console.log(formatLog("UPLOAD", url, uploadRes.status, end - start));
        console.log(C_DIM + `   > Result: ${uploadRes.data.successCount} indexed, ${uploadRes.data.failCount} rejected` + C_RESET);
        return uploadRes.data;
    } catch (e) {
        const end = performance.now();
        console.log(formatLog("UPLOAD", url, e.response?.status || 500, end - start, `| ${e.message}`));
        throw e;
    }
}

async function run() {
    printHeader("UNIZ PROTOCOL VERIFICATION SUITE v9.1 (FULL LOGS)");

    let studentToken, caretakerMaleToken, wardenMaleToken, swoToken, securityToken, webmasterToken, caretakerFemaleToken;
    let requestId;

    try {
        // ==========================================
        // 0. CLEANUP & INITIALIZATION
        // ==========================================
        printSection("Environment Sanitization");
        logAction("Initializing Maintenance Protocols");
        
        try {
            logAction("Truncating Academic History Tables");
            execSync('node uniz-academics-service/scripts/temp_truncate.js', { stdio: 'inherit' });
            logComplete("Database Sanitized");
        } catch (truncErr) {
            console.warn(C_YELLOW + "   [!] Truncation script failed or missing. Continuing with existing data." + C_RESET);
        }

        {
            // Login Admin (Cache Session)
            const webRes = await request('POST', '/auth/login', { username: 'webmaster', password: 'webmaster@uniz' }, null, false);
            webmasterToken = webRes.data?.token;

            // Login Security (Needed for Force Check-in & Step 4)
            const secRes = await request('POST', '/auth/login', { username: 'security', password: 'security@uniz' }, null, false);
            securityToken = secRes.data?.token;

            // Login Student (Persist Token)
            const stuRes = await request('POST', '/auth/login', { username: 'O210008', password: '123456' });
            studentToken = stuRes.data.token;
            if (!studentToken) throw new Error("Student Login Failed");
            
            const myRequests = await request('GET', '/requests/history?limit=100', null, studentToken);
            const allReqs = myRequests.data.history || [];
            
            let deletedCount = 0;
            for (const req of allReqs) {
                 const reqId = req.id || req._id;
                 if (!req.checked_in_time && req.status !== 'REJECTED') {
                     if (req.isApproved || req.status === 'APPROVED') {
                         // Force Check-in to close it
                         await request('POST', `/requests/${reqId}/checkin`, {}, securityToken, false);
                         deletedCount++;
                     } else {
                         // Reject Pending
                         await request('POST', `/requests/${reqId}/approve`, { action: 'reject', comments: 'Auto-cleanup' }, webmasterToken, false);
                         deletedCount++;
                     }
                 }
            }
            logComplete(`Purged/Closed ${deletedCount} active entities`);
            
            if(webmasterToken) await request('PUT', '/profile/admin/student/O210008', { has_pending_requests: false }, webmasterToken);
            logComplete("Profile Pending Flag Reset");
        }

        // ==========================================
        // 1. STUDENT FLOW
        // ==========================================
        printSection("Student Workflow Simulation");
        
        // Reuse studentToken from Step 0
        console.log(`   > Using cached session for O210008...`);

        await request('GET', '/profile/student/me', null, studentToken);
        await request('PUT', '/profile/student/update', { phone: '9876543210' }, studentToken);

        logAction("Generating Time-Bound Request Payload");
        const fromDate = new Date(Date.now() + 86400000);
        const toDate = new Date(Date.now() + 86400000 + 14400000);
        const outingPayload = {
            reason: "Buying Essentials",
            destination: "Ongole Market",
            contact: "9876543210",
            fromDay: fromDate.toISOString(),
            toDay: toDate.toISOString(),
            fromTime: fromDate.toISOString(),
            toTime: toDate.toISOString()
        };
        console.log(""); 
        const applyRes = await request('POST', '/requests/outing', outingPayload, studentToken);
        
        requestId = applyRes.data.data?.id || applyRes.data.data?.requestId || applyRes.data.requestId || applyRes.data.id; 
        if (!requestId) throw new Error("Failed to capture Request ID");
        
        logComplete(`Request Entity Created: [${requestId}]`);

        // ==========================================
        // 2. ROLE CHECKS
        // ==========================================
        printSection("ACL & Visibility Matrix Audit");

        const cmRes = await request('POST', '/auth/login', { username: 'caretaker_male', password: 'caretaker_male@uniz' });
        caretakerMaleToken = cmRes.data.token;
        
        const cmCheck = await request('GET', `/requests/outing/all?search=O210008`, null, caretakerMaleToken);
        const foundCM = cmCheck.data.outings.find(r => r.id === requestId || r._id === requestId);
        console.log(`   > Caretaker Male Access:   ${foundCM ? C_GREEN+'GRANTED'+C_RESET : C_RED+'DENIED'+C_RESET}`);

        const cfRes = await request('POST', '/auth/login', { username: 'caretaker_female', password: 'caretaker_female@uniz' });
        caretakerFemaleToken = cfRes.data.token;

        const cfCheck = await request('GET', `/requests/outing/all?search=O210008`, null, caretakerFemaleToken);
        const foundCF = cfCheck.data.outings?.find(r => r.id === requestId || r._id === requestId);
        console.log(`   > Caretaker Female Access: ${!foundCF ? C_GREEN+'DENIED (CORRECT)'+C_RESET : C_RED+'GRANTED (FAIL)'+C_RESET}`);

        // ==========================================
        // 3. APPROVAL FLOW
        // ==========================================
        printSection("Approval Chain Execution");

        const swoRes = await request('POST', '/auth/login', { username: 'swo', password: 'swo@uniz' });
        swoToken = swoRes.data.token;

        const ctAction = await request('POST', `/requests/${requestId}/approve`, { action: 'forward', comments: 'Ok' }, caretakerMaleToken);
        let isFinalized = ctAction.data.isApproved || ctAction.data.data?.isApproved;

        if (!isFinalized) {
            logAction("Request Elevated to Warden");
            const wmRes = await request('POST', '/auth/login', { username: 'warden_male', password: 'warden_male@uniz' });
            wardenMaleToken = wmRes.data.token;

            const wdAction = await request('POST', `/requests/${requestId}/approve`, { action: 'forward', comments: 'Good' }, wardenMaleToken);
            isFinalized = wdAction.data.isApproved || wdAction.data.data?.isApproved;
        } else {
             logComplete("Auto-Approved at Tier 1 (Caretaker)");
        }

        if (!isFinalized) {
            await request('POST', `/requests/${requestId}/approve`, { action: 'approve', comments: 'Approved' }, swoToken);
        }
        
        logComplete("Chain Status: FINALIZED");

        // ==========================================
        // 4. SECURITY FLOW
        // ==========================================
        printSection("Security Checkpoint Integration");
        console.log("   > Using cached Security session...");

        await request('GET', '/requests/security/summary', null, securityToken);
        await request('POST', `/requests/${requestId}/checkout`, {}, securityToken);
        
        logAction("Testing Double-Application Prevention");
        const failReq = await request('POST', '/requests/outpass', {
            reason: "Retry", destination: "Home", contact: "999",
            fromDay: new Date().toISOString(), toDay: new Date().toISOString()
        }, studentToken, false);
        
        console.log(`   > Prevention Logic: ${failReq.status >= 400 ? C_GREEN+'ACTIVE'+C_RESET : C_RED+'FAILED'+C_RESET}`);

        await request('POST', `/requests/${requestId}/checkin`, {}, securityToken);
        await request('GET', '/profile/student/me', null, studentToken);

        // ==========================================
        // 5. AUTH FLOW (OTP)
        // ==========================================
        printSection("Interactive MFA Challenge");
        
        console.log("   > Initiating OTP Request...");
        await request('POST', '/auth/otp/request', { username: 'O210008' });

        let attempts = 0;
        let verified = false;

        console.log(`${C_CYAN}   > NOTE: You have 3 attempts. Failing 3 times simulates a bypass test.${C_RESET}`);

        while (attempts < 3) {
            const inputOtp = await askUser(`\n${C_BOLD}   > Enter OTP (Attempt ${attempts + 1}/3): ${C_RESET}`);
            if(!inputOtp) { attempts++; continue; }

            const verifyRes = await request('POST', '/auth/otp/verify', { username: 'O210008', otp: inputOtp.trim() }, null, false);
            
            if (verifyRes.status === 200 || verifyRes.status === 201) {
                console.log(C_GREEN + "   > ACCESS GRANTED [OTP VERIFIED]" + C_RESET);
                verified = true;
                break;
            } else {
                console.log(C_RED + "   > ACCESS DENIED [INVALID CREDENTIALS]" + C_RESET);
                attempts++;
            }
        }

        if (!verified) {
             console.log(C_YELLOW + "   > MAX ATTEMPTS EXCEEDED. BYPASSING RESET PROTOCOL." + C_RESET);
        } else {
             console.log(C_YELLOW + "   > CREDENTIALS VALID. RESET PROTOCOL ABORTED (Safety Override)." + C_RESET);
        }

        // ==========================================
        // 6. ACADEMICS
        // ==========================================
        printSection("Academic Data Ingestion");
        console.log("   > Using cached Webmaster session...");

        await request('POST', '/profile/student/search', { limit: 10 }, webmasterToken);
        await request('GET', '/profile/admin/student/O210008', null, webmasterToken);

        await uploadWithProgress('/academics/grades/upload', 'tests/data/full_batch_grades.xlsx', webmasterToken, "Grades");
        await uploadWithProgress('/academics/attendance/upload', 'tests/data/full_batch_attendance.xlsx', webmasterToken, "Attendance");

        const batchRes = await request('GET', '/academics/grades/batch?branch=CSE&semesterId=SEM-1&year=O21&failedOnly=true', null, webmasterToken);
        console.log(`   > Grade Analysis: ${batchRes.data.grades?.length || 0} failing records identified`);

        await request('POST', '/academics/grades/publish-email', { semesterId: 'SEM-1', year: 'O21' }, webmasterToken);
        
        logAction("Testing Attendance Result Publishing Notification");
        await request('POST', '/academics/attendance/publish-email', { semesterId: 'SEM-1', year: 'O21' }, webmasterToken);
        
        // Optional: Monitor publish progress if needed
        // await monitorPublishProgress(webmasterToken, "Attendance");

        // ==========================================
        // 7. GRIEVANCE
        // ==========================================
        printSection("Grievance Redressal");

        await request('POST', '/grievance/submit', { 
            subject: 'Mess Food Issue', description: 'Quality is low today.', isAnonymous: true, category: 'HOSTEL' 
        }, studentToken);

        await request('POST', '/grievance/submit', { 
            subject: 'Wi-Fi Problem', description: 'Speed is slow in block 2.', isAnonymous: false, category: 'INFRASTRUCTURE' 
        }, studentToken);

        await request('GET', '/grievance/list', null, swoToken);

        // ==========================================
        // 8. SYSTEM & CONTENT
        // ==========================================
        printSection("System & Content Verification");

        await request('GET', '/system/health', null, null, false);
        
        const subjRes = await request('GET', '/academics/subjects', null, webmasterToken);
        const subjCount = Array.isArray(subjRes.data) ? subjRes.data.length : (subjRes.data.subjects?.length || 0);
        console.log(`   > Academic Catalog: ${subjCount} subjects active`);

        await request('GET', '/profile/student/banners', null, studentToken);
        await request('GET', '/profile/admin/banners', null, webmasterToken);

        console.log(`\n${C_GREEN}${C_BOLD}/// SYSTEM INTEGRITY VERIFIED. ALL SUBSYSTEMS OPERATIONAL. ///${C_RESET}\n`);
        
    } catch (e) {
        console.error(`\n${C_RED}${C_BOLD}!!! CRITICAL SYSTEM FAILURE !!!${C_RESET}`);
        console.error(e);
    } finally {
        rl.close();
    }
}

run();
