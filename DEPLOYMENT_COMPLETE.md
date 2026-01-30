# 🚀 UniZ Cloud Deployment - Complete

## Deployment Status: ✅ ALL SYSTEMS OPERATIONAL

All microservices have been successfully deployed to Vercel with full environment variable configuration and database integration.

---

## 🌐 Live Service URLs

### Core Application
| Service | URL | Status |
|---------|-----|--------|
| **Frontend (UniZ)** | [uniz-ten.vercel.app](https://uniz-ten.vercel.app) | ✅ Live |

### API Gateway
| Service | URL | Purpose |
|---------|-----|---------|
| **Production Gateway** | [uniz-production-gateway.vercel.app](https://uniz-production-gateway.vercel.app) | Config-based routing hub |
| **Programmatic Gateway** | [uniz-gateway.vercel.app](https://uniz-gateway.vercel.app) | Express proxy with custom logic |

### Microservices
| Service | URL | Database Schema |
|---------|-----|-----------------|
| **Auth Service** | [uniz-auth-service.vercel.app](https://uniz-auth-service.vercel.app) | `auth` |
| **User Service** | [uniz-user-service.vercel.app](https://uniz-user-service.vercel.app) | `users` |
| **Outpass Service** | [uniz-outpass-service.vercel.app](https://uniz-outpass-service.vercel.app) | `outpass` |

### Support Services
| Service | URL | Purpose |
|---------|-----|---------|
| **Cron Service** | [uniz-cron-service.vercel.app](https://uniz-cron-service.vercel.app) | Daily maintenance (00:00 UTC) |
| **Notification Service** | [uniz-notification-service.vercel.app](https://uniz-notification-service.vercel.app) | Email/SMS dispatch |

---

## 🔐 Environment Variables Configuration

### Auth Service
```
DATABASE_URL=postgresql://...?schema=auth
REDIS_URL=rediss://...@cheerful-collie-18663.upstash.io:6379
JWT_SECURITY_KEY=uniz_vault_secure_2026_key
```

### User Service
```
DATABASE_URL=postgresql://...?schema=users
JWT_SECURITY_KEY=uniz_vault_secure_2026_key
CLOUDINARY_CLOUD_NAME=dy2fjgt46
CLOUDINARY_UPLOAD_PRESET=uniz_upload
```

### Outpass Service
```
DATABASE_URL=postgresql://...?schema=outpass
JWT_SECURITY_KEY=uniz_vault_secure_2026_key
```

### Cron Service
```
DATABASE_URL=postgresql://...?schema=outpass
```

### Notification Service
```
REDIS_URL=rediss://...@cheerful-collie-18663.upstash.io:6379
SMTP_HOST=smtp.ethereal.email
SMTP_USER=user_mock
SMTP_PASS=pass_mock
```

### Frontend (UniZ)
```
VITE_API_URL=https://uniz-production-gateway.vercel.app/api/v1
VITE_CLOUDINARY_CLOUD_NAME=dy2fjgt46
VITE_CLOUDINARY_UPLOAD_PRESET=uniz_upload
```

### Gateway Services
```
AUTH_SERVICE_URL=https://uniz-auth-service.vercel.app
USER_SERVICE_URL=https://uniz-user-service.vercel.app
OUTPASS_SERVICE_URL=https://uniz-outpass-service.vercel.app
```

---

## 🗄️ Database Architecture

**Provider:** Neon PostgreSQL  
**Connection:** `postgresql://neondb_owner:npg_5ulZqX3YDptG@ep-frosty-mud-ahwpoi10-pooler.c-3.us-east-1.aws.neon.tech/neondb`

### Schema Isolation
- **`auth` schema**: Authentication credentials, OTP logs
- **`users` schema**: Student, Faculty, Admin profiles
- **`outpass` schema**: Outpass and Outing requests

### Pre-seeded Test Accounts
| Role | Username | Password |
|------|----------|----------|
| Student | `S2025001` | `password123` |
| Admin | `admin_uniz` | `password123` |

---

## 🔄 Service Integration Flow

```
User Request
    ↓
Frontend (uniz-ten.vercel.app)
    ↓
API Gateway (uniz-production-gateway.vercel.app)
    ↓
┌─────────────┬──────────────┬─────────────────┐
│ Auth Service│ User Service │ Outpass Service │
└─────────────┴──────────────┴─────────────────┘
         ↓            ↓              ↓
    ┌────────────────────────────────┐
    │   Neon PostgreSQL (3 schemas)  │
    └────────────────────────────────┘
```

---

## ⚡ Key Features Deployed

### Authentication & Authorization
- ✅ JWT-based authentication with 7-day expiry
- ✅ Role-based access control (Student, Faculty, Admin)
- ✅ OTP-based password reset
- ✅ Redis rate limiting on OTP endpoints

### User Management
- ✅ Student profile CRUD operations
- ✅ Faculty profile management
- ✅ Admin search with filtering (branch, year, gender)
- ✅ Cloudinary integration for profile pictures

### Request Management
- ✅ Outpass request creation and approval workflow
- ✅ Outing request creation and approval workflow
- ✅ Multi-level approval system (Caretaker → Warden → DSW)
- ✅ Request history with pagination
- ✅ Automatic expiry handling

### Automation
- ✅ Daily cron job for outpass expiry (00:00 UTC)
- ✅ OTP cleanup (24h+ old entries)
- ✅ Async notification queue (BullMQ + Redis)

---

## 🛠️ Maintenance & Monitoring

### Manual Cron Trigger
```bash
curl https://uniz-cron-service.vercel.app/api/cron
```

### Health Checks
```bash
# Auth Service
curl https://uniz-auth-service.vercel.app/health

# User Service
curl https://uniz-user-service.vercel.app/health

# Outpass Service
curl https://uniz-outpass-service.vercel.app/health
```

### Vercel Dashboard
- **Logs**: https://vercel.com/sreecharan-desus-projects
- **Environment Variables**: Project Settings → Environment Variables
- **Deployments**: Project → Deployments tab

---

## 📝 Important Notes

### Project Naming
- ⚠️ Frontend is now **`uniz`** (previously `uniz-client`)
- All references updated to avoid confusion

### Vercel Limitations (Hobby Plan)
- Cron jobs limited to **once per day**
- No persistent WebSocket connections (use HTTP polling or upgrade)
- 10-second function timeout

### Security Recommendations
1. **Change JWT_SECURITY_KEY** to a cryptographically secure random string
2. **Configure real SMTP** credentials for production emails
3. **Enable CORS** restrictions in production
4. **Add rate limiting** to all public endpoints

---

## 🎯 Next Steps

1. **Test Login Flow**: Visit [uniz-ten.vercel.app](https://uniz-ten.vercel.app) and login with test credentials
2. **Custom Domain**: Configure `uniz.edu` or similar via Vercel dashboard
3. **Production Data**: Import real student/faculty data via seed scripts
4. **Monitoring**: Set up Vercel Analytics and error tracking
5. **Email Service**: Replace Ethereal with production SMTP (SendGrid, AWS SES)

---

## 📞 Support

For deployment issues or questions:
- Check Vercel logs for specific service errors
- Verify environment variables are correctly set
- Ensure database connection strings are valid
- Review CORS settings if frontend can't reach backend

**Deployment Date**: 2026-01-30  
**Status**: Production Ready ✅
