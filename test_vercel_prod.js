const axios = require('axios');
const fs = require('fs');

async function testVercelSpeed() {
    const GATEWAY_URL = "https://uniz-production-gateway.vercel.app/api/v1";
    console.log(`\n🚀 Testing Vercel Singapore Gateway: ${GATEWAY_URL}`);

    const startTime = Date.now();
    try {
        // Test Auth (Ping)
        console.log("--- Step 1: Login Test (Auth Service) ---");
        const loginStart = Date.now();
        const loginRes = await axios.post(`${GATEWAY_URL}/auth/login`, {
            username: "O210008",
            password: "password123"
        });
        const loginEnd = Date.now();
        console.log(`✅ Login Success! Token Received.`);
        console.log(`⏱️ Login Speed (Round Trip): ${loginEnd - loginStart}ms`);
        const token = loginRes.data.token;

        // Test Academics (Heavy DB Query)
        console.log("\n--- Step 2: Fetch Grades (Academics Service + Singapore Neon) ---");
        const gradesStart = Date.now();
        const gradesRes = await axios.get(`${GATEWAY_URL}/academics/grades`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const gradesEnd = Date.now();
        console.log(`✅ Fetched ${gradesRes.data.grades.length} Grade Records.`);
        console.log(`⏱️ Grade Fetch Speed: ${gradesEnd - gradesStart}ms`);

        const totalTime = Date.now() - startTime;
        console.log(`\n🏁 Total Test Duration: ${totalTime}ms`);
        
        if (totalTime < 1000) {
            console.log("🌟 EXCELLENT: Response is under 1 second!");
        } else {
            console.log("⚠️ NOTICE: Response is over 1 second, but still within acceptable limits for a cold-start.");
        }

    } catch (err) {
        console.error("❌ Test Failed:", err.response ? err.response.data : err.message);
    }
}

testVercelSpeed();
