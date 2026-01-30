const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Configuration
const SERVICES = {
    AUTH: 'https://uniz-auth-service.vercel.app',
    USER: 'https://uniz-user-service.vercel.app',
};

async function fixEmails() {
    console.log('\n--- Fixing Student Emails ---');
    
    const filePath = path.join(__dirname, '../testdata.txt');
    if (!fs.existsSync(filePath)) {
        console.error('❌ testdata.txt not found!');
        return;
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    for (const line of lines) {
        if (!line.trim() || line.startsWith('idx')) continue;

        const parts = line.split('\t');
        if (parts.length < 3) continue;

        const [idx, username, name] = parts;
        if (username === 'username') continue; // Header check

        process.stdout.write(`Updating ${username}... `);

        try {
            // 1. Login to get token
            const loginRes = await axios.post(`${SERVICES.AUTH}/login`, {
                username,
                password: 'password123'
            });
            const studentToken = loginRes.data.token;

            // 2. Construct Email
            const email = `${username.toLowerCase()}@rguktong.ac.in`;

            // 3. Update Profile
            await axios.put(`${SERVICES.USER}/student/update`, {
                email: email
            }, {
                headers: { Authorization: `Bearer ${studentToken}` }
            });

            console.log(`✅ ${email}`);
        } catch (error) {
            console.log(`❌ Failed: ${error.message}`);
            if (error.response) {
                // console.log(error.response.data);
            }
        }
    }
    console.log('\n✅ Email Fix Complete');
}

fixEmails();
