const axios = require('axios');
const fs = require('fs');

const GATEWAY_URL = "https://uniz-production-gateway.vercel.app/api/v1";

const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    cyan: "\x1b[36m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m"
};

const state = {
    tokens: {},
    data: {}
};

async function runStep(stepName, requestFn) {
    console.log(`\n${colors.bright}${colors.cyan}=== STEP: ${stepName} ===${colors.reset}`);
    const start = Date.now();
    
    try {
        const result = await requestFn();
        const timeTaken = Date.now() - start;
        
        console.log(`${colors.yellow}Request:${colors.reset} ${result.method.toUpperCase()} ${result.url}`);
        console.log(`${colors.green}Time Taken:${colors.reset} ${timeTaken} ms`);
        console.log(`${colors.blue}Response Body:${colors.reset}`);
        console.log(JSON.stringify(result.data, null, 2));
        
        return result.data;
    } catch (error) {
        const timeTaken = Date.now() - start;
        console.log(`${colors.red}FAILED: ${stepName}${colors.reset}`);
        console.log(`${colors.yellow}Time Taken:${colors.reset} ${timeTaken} ms`);
        
        if (error.response) {
            console.log(`${colors.yellow}Request:${colors.reset} ${error.config.method.toUpperCase()} ${error.config.url}`);
            console.log(`${colors.red}Status:${colors.reset} ${error.response.status}`);
            console.log(`${colors.blue}Response Body:${colors.reset}`);
            console.log(JSON.stringify(error.response.data, null, 2));
        } else {
            console.log(`${colors.red}Error:${colors.reset} ${error.message}`);
        }
        return null;
    }
}

async function main() {
    console.log(`${colors.bright}${colors.magenta}🚀 STARTING VERCEL PRODUCTION FULL FLOW TEST${colors.reset}`);
    
    // 1. Student Login
    await runStep('Student Login (O210008)', async () => {
        const res = await axios.post(`${GATEWAY_URL}/auth/login`, {
            username: "O210008",
            password: "password123"
        });
        state.tokens.student = res.data.token;
        return { method: 'post', url: `${GATEWAY_URL}/auth/login`, data: res.data };
    });

    if (!state.tokens.student) return;

    // 2. Get Profile
    await runStep('Get Student Profile', async () => {
        const res = await axios.get(`${GATEWAY_URL}/profile/student/me`, {
            headers: { Authorization: `Bearer ${state.tokens.student}` }
        });
        return { method: 'get', url: `${GATEWAY_URL}/profile/student/me`, data: res.data };
    });

    // 3. Get Grades
    await runStep('Get Student Grades', async () => {
        const res = await axios.get(`${GATEWAY_URL}/academics/grades`, {
            headers: { Authorization: `Bearer ${state.tokens.student}` }
        });
        return { method: 'get', url: `${GATEWAY_URL}/academics/grades`, data: res.data };
    });

    // 4. Get Attendance
    await runStep('Get Student Attendance', async () => {
        const res = await axios.get(`${GATEWAY_URL}/academics/attendance`, {
            headers: { Authorization: `Bearer ${state.tokens.student}` }
        });
        return { method: 'get', url: `${GATEWAY_URL}/academics/attendance`, data: res.data };
    });

    // 5. Submit Outpass Request
    await runStep('Send Outpass Request', async () => {
        const res = await axios.post(`${GATEWAY_URL}/requests/outpass`, {
            reason: "Emergency visit to home",
            fromDay: "2026-02-10T09:00:00Z",
            toDay: "2026-02-15T18:00:00Z",
            studentGender: "M"
        }, {
            headers: { Authorization: `Bearer ${state.tokens.student}` }
        });
        if (res.data.success && res.data.data) {
            state.data.outpassId = res.data.data.id;
        }
        return { method: 'post', url: `${GATEWAY_URL}/requests/outpass`, data: res.data };
    });

    // 6. Caretaker Approval Flow
    await runStep('Caretaker Login', async () => {
        const res = await axios.post(`${GATEWAY_URL}/auth/login`, {
            username: "caretaker_male",
            password: "caretaker@uniz"
        });
        state.tokens.caretaker = res.data.token;
        return { method: 'post', url: `${GATEWAY_URL}/auth/login`, data: res.data };
    });

    if (state.tokens.caretaker && state.data.outpassId) {
        await runStep('Caretaker Approves Outpass', async () => {
            const res = await axios.post(`${GATEWAY_URL}/requests/${state.data.outpassId}/approve`, {
                comment: "Verified with parents."
            }, {
                headers: { Authorization: `Bearer ${state.tokens.caretaker}` }
            });
            return { method: 'post', url: `${GATEWAY_URL}/requests/${state.data.outpassId}/approve`, data: res.data };
        });
    }

    // 7. Director Student Search
    await runStep('Director Login', async () => {
        const res = await axios.post(`${GATEWAY_URL}/auth/login`, {
            username: "director",
            password: "director@uniz"
        });
        state.tokens.director = res.data.token;
        return { method: 'post', url: `${GATEWAY_URL}/auth/login`, data: res.data };
    });

    if (state.tokens.director) {
        await runStep('Director Searches Student O210008', async () => {
            const res = await axios.post(`${GATEWAY_URL}/profile/student/search`, {
                username: "O210008"
            }, {
                headers: { Authorization: `Bearer ${state.tokens.director}` }
            });
            return { method: 'post', url: `${GATEWAY_URL}/profile/student/search`, data: res.data };
        });
    }

    console.log(`\n${colors.bright}${colors.green}=== VERCEL PRODUCTION FLOW TEST COMPLETE ===${colors.reset}`);
}

main();
