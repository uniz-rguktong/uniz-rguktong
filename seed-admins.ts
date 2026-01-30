
import axios from 'axios';

const BASE_URL = 'https://uniz-production-gateway.vercel.app/api/v1';

const admins = [
  { username: 'director', password: 'director@uniz', role: 'director' },
  { username: 'webmaster', password: 'webmaster@uniz', role: 'webmaster' },
  { username: 'dean_cse', password: 'dean@uniz', role: 'dean' },
  { username: 'dean_ece', password: 'dean@uniz', role: 'dean' },
  { username: 'caretaker_female', password: 'caretaker@uniz', role: 'caretaker_female' },
  { username: 'caretaker_male', password: 'caretaker@uniz', role: 'caretaker_male' },
  { username: 'swo_admin', password: 'swo@uniz', role: 'swo' },
  { username: 'warden_male', password: 'warden@uniz', role: 'warden_male' },
  { username: 'warden_female', password: 'warden@uniz', role: 'warden_female' },
  { username: 'security_admin', password: 'security@uniz', role: 'security' },
  { username: 'librarian_admin', password: 'librarian@uniz', role: 'librarian' }
];

async function seedAdmins() {
  console.log('Seeding Admins...');
  for (const admin of admins) {
    try {
      const res = await axios.post(`${BASE_URL}/auth/signup`, admin);
      console.log(`Created Admin: ${admin.username} (${admin.role})`);
    } catch (err: any) {
      if (err.response?.status === 409) {
        console.log(`Admin already exists: ${admin.username}`);
      } else {
        console.error(`Failed to create ${admin.username}:`, err.response?.data || err.message);
      }
    }
  }
}

seedAdmins();
