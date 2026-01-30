# UniZ API Documentation v4.0

**Project**: UniZ Microservices Backend  
**Version**: 4.0 (EXHAUSTIVE AUDIT)  
**Gateway URL**: `https://uniz-production-gateway.vercel.app/api/v1`

---

## Standard Protocol

### Request Headers
- **JSON**: `Content-Type: application/json`
- **Uploads**: `Content-Type: multipart/form-data`
- **Auth**: `Authorization: Bearer <JWT_TOKEN>`

### Unified Response Format
```json
{
  "success": true,
  "data": { ... },     // On Success
  "code": "ERROR_CODE", // On Error
  "message": "Human readable message"
}
```

---

## 1. Role-Specific Authorization Matrix
| Role | Service Access | Logic |
| :--- | :--- | :--- |
| **Student** | Auth, Profile, Academics, Outpass | Restricted to self-data. |
| **Webmaster** | All | Global Root Access. |
| **Director / Dean** | All | Full Academic & Outpass Oversight. |
| **SWO** | Profile, Outpass | Global Outpass Approval. |
| **Warden / Caretaker**| Profile, Outpass | Gender-Locked Outpass Approval. |
| **Security** | Outpass | Read-only access to Approved/Active requests. |
| **Librarian** | Profile | Basic Profile View. |

---

## 2. Auth Service (/auth)

### [POST] /login
- **Body**: `{ "username": "...", "password": "..." }`
- **Output Success**: `{ "success": true, "token": "...", "role": "...", "username": "...", "student_token": "...", "admin_token": "..." }`

### [POST] /signup
- **Body**: `{ "username": "...", "password": "...", "role": "...", "email": "..." }`

### [POST] /otp/request
- **Body**: `{ "username": "..." }`
- **Output**: `{ "success": true, "message": "OTP sent" }`

### [POST] /otp/verify
- **Body**: `{ "username": "...", "otp": "..." }`

### [POST] /password/reset
- **Body**: `{ "username": "...", "otp": "...", "newPassword": "..." }`

---

## 3. User Service (/profile)

### [GET] /student/me
- **Output**: `{ "success": true, "student": { "_id", "username", "name", "email", "gender", "year", "branch", "section", "roomno", "has_pending_requests", "is_in_campus", "blood_group", "phone_number", "profile_url", ... } }`

### [PUT] /student/update
- **Body**: `{ "name", "phone", "email", "address" }`

### [POST] /student/search
- **Body**: `{ "username", "branch", "year", "gender", "page", "limit" }`

### [GET] /faculty/me
- **Output**: `{ "success": true, "faculty": { "id", "Username", "Name", "Email", "Department", "Designation", "Role", "Contact", "ProfileUrl" } }`

### [POST] /faculty/create
- **Body**: `{ "username", "name", "email", "department", "designation" }`

### [GET] /admin/me
- **Output**: `{ "success": true, "data": { "id", "username", "email", "role" } }`

---

## 4. Academics Service (/academics)

### [GET] /grades
- **Output**: `{ "success": true, "grades": [ { "id", "grade", "semesterId", "subject": { "id", "code", "name", "credits" } } ] }`

### [POST] /grades/add
- **Body**: `{ "studentId", "semesterId", "grades": [ { "subjectId", "grade" } ] }`

### [GET] /grades/template
- **Output**: Binary Data (.xlsx File)

### [POST] /grades/upload
- **Body**: Multipart `file`

### [GET] /attendance
- **Output**: `{ "success": true, "attendance": [ { "id", "attendedClasses", "totalClasses", "semesterId", "subject": { ... } } ] }`

### [POST] /attendance/add
- **Body**: `{ "subjectId", "records": [ { "studentId", "semesterId", "attended", "total" } ] }`

### [GET] /attendance/template
- **Output**: Binary Data (.xlsx File)

### [POST] /attendance/upload
- **Body**: Multipart `file`

### [GET] /subjects
- **Output**: `{ "success": true, "subjects": [ { "id", "code", "name", "credits", "department", "semester" } ] }`

### [POST] /subjects/add
- **Body**: `{ "code", "name", "credits", "department", "semester" }`

---

## 5. Outpass Service (/requests)

### [POST] /outpass
- **Body**: `{ "reason", "fromDay", "toDay", "studentGender" }`

### [POST] /outing
- **Body**: `{ "reason", "fromTime", "toTime", "studentGender" }`

### [GET] /history or /history/:id
- **Output**: `{ "success": true, "history": [ { "_id", "type", "is_approved", "is_rejected", "is_expired", "requested_time", "from_time", "to_time", "from_day", "to_day" } ], "pagination" }`

### [POST] /:id/approve or /:id/reject
- **Body**: `{ "comment" }`

### [GET] /outpass/all
- **Description**: Logic depends on Role (Security/Warden/Admin).

### [GET] /outing/all
- **Description**: Logic depends on Role (Security/Warden/Admin).

---

## 6. Response Codes

| Code | Status | Logic |
| :--- | :--- | :--- |
| `AUTH_UNAUTHORIZED` | 401 | JWT Missing/Invalid. |
| `AUTH_FORBIDDEN` | 403 | Role-Restriction Violation. |
| `VALIDATION_ERROR` | 400 | Zod Schema Failure. |
| `RESOURCE_NOT_FOUND` | 404 | Database miss. |

---
**Documented by UniZ Backend Core**
