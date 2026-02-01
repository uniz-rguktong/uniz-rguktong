const axios = require('axios');

const GATEWAY = 'https://uniz-production-gateway.vercel.app/api/v1';

async function testProductionFlow() {
    console.log("🚀 Starting Production Verification Flow...");

    try {
        // 1. Student Login
        console.log("\n[1] Student Login (O210008)...");
        const loginRes = await axios.post(`${GATEWAY}/auth/login`, {
            username: 'O210008',
            password: 'password123'
        });
        const token = loginRes.data.token;
        console.log("✅ Logged in successfully");

        // 2. Fetch Profile
        console.log("\n[2] Fetching Profile...");
        const profileRes = await axios.get(`${GATEWAY}/profile/student/me`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const student = profileRes.data.student;
        console.log("✅ Profile fetched:", student.name, `(${student.gender})`);

        // 3. Reset Password OTP Flow (Request)
        console.log("\n[3] Requesting Password Reset OTP...");
        const otpRes = await axios.post(`${GATEWAY}/auth/otp/request`, {
            username: 'O210008'
        });
        console.log("✅ OTP Request sent to email:", otpRes.data.message);

        // 4. Outing Request
        console.log("\n[4] Applying for Outing...");
        const outingRes = await axios.post(`${GATEWAY}/requests/outing`, {
            reason: 'Going home for weekend',
            fromTime: new Date(Date.now() + 86400000).toISOString(),
            toTime: new Date(Date.now() + 172800000).toISOString(),
            hours: 24,
            studentGender: student.gender
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        const requestId = outingRes.data.data.id;
        console.log("✅ Outing requested. ID:", requestId);
        console.log("ℹ️ Routed to:", outingRes.data.data.currentLevel);

        // 5. Admin Login (Caretaker Male)
        console.log("\n[5] Caretaker Login (caretaker_male)...");
        const adminLogin = await axios.post(`${GATEWAY}/auth/login`, {
            username: 'caretaker_male',
            password: 'caretaker@uniz'
        });
        const adminToken = adminLogin.data.token;
        console.log("✅ Caretaker logged in");

        // 6. Fetch Pending Requests (Caretaker)
        console.log("\n[6] Fetching Pending Requests...");
        const pendingRes = await axios.get(`${GATEWAY}/requests/outing/all`, {
            headers: { Authorization: `Bearer ${adminToken}` }
        });
        const outings = pendingRes.data.outings || [];
        console.log("✅ Pending requests found:", outings.length);

        // 7. Approve Request
        console.log("\n[7] Approving Request...");
        const approveRes = await axios.post(`${GATEWAY}/requests/${requestId}/approve`, {
            message: 'Have a safe trip'
        }, {
            headers: { Authorization: `Bearer ${adminToken}` }
        });
        console.log("✅ Status:", approveRes.data.message || "Approved");

        // 8. Academic Details
        console.log("\n[8] Viewing Academic Grades...");
        const gradesRes = await axios.get(`${GATEWAY}/academics/grades`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log("✅ Grades found count:", gradesRes.data.grades?.length || 0);

        // 9. Search Students (Admin)
        console.log("\n[9] Admin Student Search (Pagination)...");
        const searchRes = await axios.post(`${GATEWAY}/profile/student/search`, {
            username: 'O2100',
            page: 1,
            limit: 5
        }, {
            headers: { Authorization: `Bearer ${adminToken}` }
        });
        const students = searchRes.data.students || [];
        console.log("✅ Search results count:", students.length, "/", searchRes.data.total);

        console.log("\n✨ Production Verification Complete: SUCCESS");

    } catch (e) {
        console.error("\n❌ Production Verification FAILED:");
        if (e.response) {
            console.error("Status:", e.response.status);
            console.error("Data:", JSON.stringify(e.response.data, null, 2));
        } else {
            console.error(e.message);
        }
    }
}

testProductionFlow();
