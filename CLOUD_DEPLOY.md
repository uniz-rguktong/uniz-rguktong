# UniZ Cloud Deployment Instructions (Vercel + Neon + Upstash)

This guide helps you deploy the UniZ Microservices architecture to Vercel. All database schemas have already been initialized in your Neon instance.

## 1. Prepare Environment Variables
For each service, you will need to set these in the Vercel Dashboard (Settings > Environment Variables).

### **Auth Service (`uniz-auth-service`)**
- `DATABASE_URL`: `postgresql://neondb_owner:npg_5ulZqX3YDptG@ep-frosty-mud-ahwpoi10-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&schema=auth`
- `REDIS_URL`: `rediss://default:AUjnAAIncDE0MTgwNzM4NjdjYzk0Nzg3YTg2NzIyN2VkMGI1YjRkYnAxMTg2NjM@cheerful-collie-18663.upstash.io:6379`
- `JWT_SECURITY_KEY`: `uniz_vault_secure_2026_key` (or your own)

### **User Service (`uniz-user-service`)**
- `DATABASE_URL`: `postgresql://neondb_owner:npg_5ulZqX3YDptG@ep-frosty-mud-ahwpoi10-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&schema=users`

### **Outpass Service (`uniz-outpass-service`)**
- `DATABASE_URL`: `postgresql://neondb_owner:npg_5ulZqX3YDptG@ep-frosty-mud-ahwpoi10-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&schema=outpass`

---

## 2. Deployment Commands
Run these commands in your terminal (ensure you have `vercel` CLI installed: `npm i -g vercel`).

### **Deploy Auth Service**
```bash
cd uniz-auth-service
vercel deploy --prod
```

### **Deploy User Service**
```bash
cd uniz-user-service
vercel deploy --prod
```

### **Deploy Outpass Service**
```bash
cd uniz-outpass-service
vercel deploy --prod
```

### **Deploy the Gateway**
```bash
cd uniz-production-gateway
# NOTE: Update vercel.json with your actual .vercel.app URLs first!
vercel deploy --prod
```

### **Deploy Frontend**
```bash
cd uniz-client
# Set VITE_API_URL to your Gateway URL in Vercel dashboard
vercel deploy --prod
```

## 3. Post-Deployment Test
- **Login**: Use `S2025001` with password `password123`.
- **Admin**: Use `admin_uniz` with password `password123`.
- **DB**: Check your Neon console; you should see data in the `auth` and `users` schemas.

### **Deployed Support Services**
- **Cron Service (Daily)**: [https://uniz-cron-service.vercel.app](https://uniz-cron-service.vercel.app)
  - Handles daily maintenance jobs like OTP cleanup and Outpass expiry.
- **Notification Service**: [https://uniz-notification-service.vercel.app](https://uniz-notification-service.vercel.app)
  - Handles async notifications (Email/SMS).
- **Programmatic Gateway**: [https://uniz-gateway.vercel.app](https://uniz-gateway.vercel.app)
  - Alternative to the rewrite hub, running the full Express proxy logic.
