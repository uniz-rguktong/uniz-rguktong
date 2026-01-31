const axios = require('axios');

const GATEWAY_URL = "https://uniz-production-gateway.vercel.app/api/v1";

// Colors for output
const c = {
    green: "\x1b[32m",
    red: "\x1b[31m",
    cyan: "\x1b[36m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    reset: "\x1b[0m",
    bold: "\x1b[1m"
};

const state = {
    tokens: {},
    data: {}
};

async function runStep(name, fn) {
    process.stdout.write(`${c.cyan}[TEST] ${name.padEnd(50)}... ${c.reset}`);
    const start = Date.now();
    try {
        const res = await fn();
        const duration = Date.now() - start;
        console.log(`${c.green}✅ PASS (${duration}ms)${c.reset}`);
        if (res && res.headers && (res.headers['x-vercel-cache'] || res.headers['x-cache'])) {
             console.log(`       ${c.blue}📡 Cache Status: ${res.headers['x-vercel-cache'] || res.headers['x-cache']} ${res.data.source ? `(Source: ${res.data.source})` : ''}${c.reset}`);
        }
        return res ? res.data : null;
    } catch (e) {
        const duration = Date.now() - start;
        // Handle specific "Acceptable" errors
        if (e.response && e.response.status === 409 && name.includes("Create Outpass")) {
             console.log(`${c.green}✅ PASS (Already Exists) (${duration}ms)${c.reset}`);
             return e.response.data; // Return data so we can maybe parse ID? No, logic needs fetch
        }

        console.log(`${c.red}❌ FAIL (${duration}ms)${c.reset}`);
        if (e.response) {
            console.log(`       Status: ${e.response.status} - ${JSON.stringify(e.response.data)}`);
        } else {
            console.log(`       Error: ${e.message}`);
        }
        return null;
    }
}

async function main() {
    console.log(`\n${c.bold}🚀 UNI-Z FINAL PRODUCTION SYSTEM TEST (ADJUSTED) 🚀${c.reset}\n`);

    // ==========================================
    // 1. AUTHENTICATION
    // ==========================================
    console.log(`${c.yellow}--- GROUP 1: AUTHENTICATION ---${c.reset}`);

    await runStep("Student Login (O210008)", async () => {
        const res = await axios.post(`${GATEWAY_URL}/auth/login`, {
            username: "O210008",
            password: "password123"
        });
        state.tokens.student = res.data.token;
        return res;
    });

    await runStep("Director Login (Super Admin)", async () => {
        const res = await axios.post(`${GATEWAY_URL}/auth/login`, {
            username: "director",
            password: "director@uniz"
        });
        state.tokens.director = res.data.token;
        // Use director as fallback security role
        state.tokens.security = res.data.token; 
        return res;
    });

    // ==========================================
    // 2. STUDENT FEATURES
    // ==========================================
    console.log(`\n${c.yellow}--- GROUP 2: STUDENT FEATURES ---${c.reset}`);
    const sAuth = { headers: { Authorization: `Bearer ${state.tokens.student}` } };
    state.tokens.sAuth = sAuth;

    await runStep("Get Profile", async () => {
        return axios.get(`${GATEWAY_URL}/profile/student/me`, sAuth);
    });

    // CORRECTED: 'address' not in schema, 'phone' is valid.
    await runStep("Update Profile Details (Phone)", async () => {
        return axios.put(`${GATEWAY_URL}/profile/student/update`, {
            phone: "9123456789"
        }, sAuth);
    });

    await runStep("Get Grades (Performance Check)", async () => {
        return axios.get(`${GATEWAY_URL}/academics/grades`, sAuth);
    });

    await runStep("Get Attendance", async () => {
        return axios.get(`${GATEWAY_URL}/academics/attendance`, sAuth);
    });

    await runStep("Get Public Banners (Student View)", async () => {
        return axios.get(`${GATEWAY_URL}/profile/student/banners`, sAuth);
    });

    // ==========================================
    // 3. REQUESTS & WORKFLOW
    // ==========================================
    console.log(`\n${c.yellow}--- GROUP 3: REQUESTS & WORKFLOW ---${c.reset}`);

    // Try creating outpass
    await runStep("Create Outpass Request", async () => {
        const res = await axios.post(`${GATEWAY_URL}/requests/outpass`, {
            reason: "Final System Check Visit",
            fromDay: new Date().toISOString(),
            toDay: new Date(Date.now() + 86400000).toISOString(),
            studentGender: "M"
        }, sAuth);
        if (res.data.data) {
             state.data.outpassId = res.data.data.id;
        }
        return res;
    });

    // Always fetch history to confirm ID (incase creation failed due to duplicate)
    await runStep("Get Request History (Find Pending)", async () => {
        const res = await axios.get(`${GATEWAY_URL}/requests/history`, sAuth);
        const pending = res.data.history.find(h => !h.isApproved && !h.isRejected && !h.isExpired);
        if (pending) {
            state.data.outpassId = pending._id || pending.id;
            console.log(`       [INFO] Found Pending ID: ${state.data.outpassId}`);
        }
        return res;
    });

    if (state.tokens.director && state.data.outpassId) {
        await runStep(`Director Approves Outpass (${state.data.outpassId})`, async () => {
            return axios.post(`${GATEWAY_URL}/requests/${state.data.outpassId}/approve`, {
                comment: "Approved by Admin Test Script"
            }, { headers: { Authorization: `Bearer ${state.tokens.director}` } });
        });
    } else {
        console.log(`${c.red}   Skipping Approval (No Pending Outpass Found)${c.reset}`);
    }

    // ==========================================
    // 4. SECURITY & TRACKING (Using Director Token)
    // ==========================================
    console.log(`\n${c.yellow}--- GROUP 4: SECURITY & TRACKING ---${c.reset}`);
    
    if (state.tokens.security) {
        const secAuth = { headers: { Authorization: `Bearer ${state.tokens.security}` } };

        await runStep("Security Search (Students OUT)", async () => {
            return axios.post(`${GATEWAY_URL}/profile/student/search`, {
                isPresentInCampus: false,
                limit: 5
            }, secAuth);
        });

        await runStep("Check-Out Student (Gate Exit)", async () => {
            return axios.put(`${GATEWAY_URL}/profile/student/status`, {
                username: "O210008",
                isPresent: false
            }, secAuth);
        });
        
        // Verify Status Change
        await runStep("Verify Student Status (is_in_campus: false)", async () => {
             const res = await axios.get(`${GATEWAY_URL}/profile/student/me`, sAuth);
             if (res.data.student.is_in_campus === false) return res;
             throw new Error("Student status did not update!");
        });

        // Check Back in
        await runStep("Check-In Student (Gate Entry)", async () => {
            return axios.put(`${GATEWAY_URL}/profile/student/status`, {
                username: "O210008",
                isPresent: true
            }, secAuth);
        });
    }

    console.log(`\n${c.bold}🏁 FINAL VERIFICATION COMPLETE 🏁${c.reset}`);
}

main();
