// Native fetch is available in Node 18+

const BASE_URL = 'https://uniz-production-gateway.vercel.app/api/v1';

const subjects = [
    {code: "E2-SEM-1-CSE-1", name: "Probability and Statistics", credits: 4, department: "CSE", semester: "SEM-1"},
    {code: "E2-SEM-1-CSE-2", name: "Digital Logic Design", credits: 3, department: "CSE", semester: "SEM-1"},
    {code: "E2-SEM-1-CSE-3", name: "Design & Analysis of Algorithms", credits: 4, department: "CSE", semester: "SEM-1"},
    {code: "E2-SEM-1-CSE-4", name: "Database Management Systems", credits: 3, department: "CSE", semester: "SEM-1"},
    {code: "E2-SEM-1-CSE-5", name: "Formal Languages & Automata Theory", credits: 4, department: "CSE", semester: "SEM-1"},
    {code: "E2-SEM-1-CSE-6", name: "Design & Analysis of Algorithms Lab", credits: 1.5, department: "CSE", semester: "SEM-1"},
    {code: "E2-SEM-1-CSE-7", name: "Digital Logic Design Lab", credits: 1.5, department: "CSE", semester: "SEM-1"},
    {code: "E2-SEM-1-CSE-8", name: "Database Management Systems Lab", credits: 1.5, department: "CSE", semester: "SEM-1"}
];

async function seed() {
    console.log("🔹 Seeding Production Subjects via API...");
    
    // Login
    let token;
    try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'webmaster', password: 'webmaster@uniz' })
        });
        const data = await res.json();
        if(!data.success) throw new Error(data.message);
        token = data.token;
        console.log("✅ Webmaster Logged In");
    } catch(e) {
        console.error("Login Failed:", e.message);
        return;
    }

    // Add Subjects
    for (const sub of subjects) {
        try {
            const res = await fetch(`${BASE_URL}/academics/subjects/add`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(sub)
            });
            const data = await res.json();
            if(data.success) console.log(`✅ Added ${sub.code}`);
            else console.log(`⚠️ Failed ${sub.code}: ${JSON.stringify(data)}`);
        } catch(e) {
            console.log(`❌ Error ${sub.code}: ${e.message}`);
        }
    }
    console.log("✨ Seeding Complete");
}

seed();
