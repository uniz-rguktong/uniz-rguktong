const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000/api/v1';

async function monitorProgress(token, type, stopCondition) {
    console.log(`\n⏳ Monitoring ${type} progress in background...`);
    const headers = { Authorization: `Bearer ${token}` };
    
    return new Promise((resolve) => {
        const interval = setInterval(async () => {
            try {
                const res = await axios.get(`${BASE_URL}/academics/upload/progress`, { headers });
                const prog = res.data.progress;
                
                if (prog && prog.total > 0) {
                    const etaText = prog.status === 'done' ? 'Done' : `${prog.etaSeconds || 0}s remaining`;
                    process.stdout.write(`\r   📊 Progress: ${prog.percent}% (${prog.processed}/${prog.total}) - ${etaText} [${prog.status}]   `);
                }
                
                if (stopCondition() || (prog && prog.status === 'done')) {
                    process.stdout.write('\n');
                    clearInterval(interval);
                    resolve(prog);
                }
            } catch (e) {
                // Ignore errors during initial phase
            }
        }, 800);
    });
}

async function runTest() {
    console.log("🚀 Starting Parallel Upload and Progress API Testing...");

    try {
        // 1. Login
        console.log("🔐 Logging in as Webmaster...");
        const loginRes = await axios.post(`${BASE_URL}/auth/login`, {
            username: 'webmaster',
            password: 'webmaster@uniz'
        });
        const token = loginRes.data.token;
        const headers = { Authorization: `Bearer ${token}` };

        // 2. Test Grades Upload
        console.log("\n🧪 Testing Grades Upload + Real-time Progress...");
        const gradesPath = path.join(__dirname, '../tests/data/full_batch_grades.xlsx');
        
        let gradesDone = false;
        const monitorPromise = monitorProgress(token, "Grades", () => gradesDone);

        const gradesForm = new FormData();
        gradesForm.append('file', fs.createReadStream(gradesPath));

        const uploadPromise = axios.post(`${BASE_URL}/academics/grades/upload`, gradesForm, {
            headers: {
                ...headers,
                ...gradesForm.getHeaders()
            }
        });

        const [finalProg, uploadRes] = await Promise.all([monitorPromise, uploadPromise]);
        gradesDone = true;

        console.log("   ✅ Grades Upload Complete.");
        console.log(`   📊 Final Stats: Success: ${uploadRes.data.successCount}, Fails: ${uploadRes.data.failCount}`);

        // 3. Test Attendance Upload
        console.log("\n🧪 Testing Attendance Upload + Real-time Progress...");
        const attendancePath = path.join(__dirname, '../tests/data/full_batch_attendance.xlsx');
        
        let attendanceDone = false;
        const attMonitorPromise = monitorProgress(token, "Attendance", () => attendanceDone);

        const attendanceForm = new FormData();
        attendanceForm.append('file', fs.createReadStream(attendancePath));

        const attUploadPromise = axios.post(`${BASE_URL}/academics/attendance/upload`, attendanceForm, {
            headers: {
                ...headers,
                ...attendanceForm.getHeaders()
            }
        });

        const [finalAttProg, attUploadRes] = await Promise.all([attMonitorPromise, attUploadPromise]);
        attendanceDone = true;

        console.log("   ✅ Attendance Upload Complete.");
        console.log(`   📊 Final Stats: Success: ${attUploadRes.data.successCount}, Fails: ${attUploadRes.data.failCount}`);

        console.log("\n✨ Verification of Upload and Progress APIs finished successfully!");

    } catch (e) {
        console.error("\n❌ Test Failed:", e.message);
        if (e.response) console.error("   Response Data:", JSON.stringify(e.response.data, null, 2));
    }
}

runTest();
