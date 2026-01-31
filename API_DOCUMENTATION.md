# 🎓 UniZ Student API Documentation (Production v1)

**Base URL (Production Gateway):**
`https://uniz-production-gateway.vercel.app/api/v1`

---

## 🔐 Authentication & Profile

### 1. Student Login
**Endpoint:** `POST /auth/login`
**Auth Required:** No

**Request Body:**
```json
{
  "username": "O210008",
  "password": "password123"
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUz...",
  "role": "student",
  "username": "O210008"
}
```

---

### 2. Get My Profile
**Endpoint:** `GET /profile/student/me`
**Auth Required:** Yes (`Authorization: Bearer <TOKEN>`)

**Success Response (200 OK):**
```json
{
  "success": true,
  "student": {
    "_id": "550e8400-e29b-41d4-a716-446655440000",
    "username": "O210008",
    "name": "DESU SREECHARAN",
    "year": "3",
    "branch": "CSE",
    "profile_url": "https://...",
    "has_pending_requests": false,
    "is_in_campus": true
  }
}
```

---

## 📚 Academics (Grades & Attendance)

### 3. Get My Grades (Cached)
**Endpoint:** `GET /academics/grades`
**Auth Required:** Yes
**Performance:** < 50ms (Redis Cached)

**Success Response (200 OK):**
```json
{
  "success": true,
  "grades": [
    {
      "id": "abc-123",
      "grade": "EX",
      "semesterId": "E3S1",
      "subject": {
        "code": "CS3101",
        "name": "Operating Systems",
        "credits": 4
      }
    },
    {
      "id": "abc-456",
      "grade": "A",
      "semesterId": "E3S1",
      "subject": {
        "code": "CS3102",
        "name": "Compiler Design",
        "credits": 4
      }
    }
  ],
  "source": "cache" // or "db"
}
```

### 4. Get My Attendance
**Endpoint:** `GET /academics/attendance`
**Auth Required:** Yes

**Success Response (200 OK):**
```json
{
  "success": true,
  "attendance": [
    {
      "id": "att-123",
      "attendedClasses": 45,
      "totalClasses": 50,
      "subject": {
        "code": "CS3101",
        "name": "Operating Systems"
      }
    }
  ]
}
```

---

## 🚪 Outpass & Permissions

### 5. Request Outpass
**Endpoint:** `POST /requests/outpass`
**Auth Required:** Yes

**Request Body:**
```json
{
  "reason": "Emergency visit to home due to health issues",
  "fromDay": "2026-02-10T09:00:00Z",
  "toDay": "2026-02-15T18:00:00Z",
  "studentGender": "M" // Optional, derived from profile if available
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "req-789",
    "currentLevel": "caretaker", // The current appover required
    "isApproved": false,
    "createdAt": "2026-01-31T10:00:00Z"
  }
}
```

### 6. Request Outing (Short Duration)
**Endpoint:** `POST /requests/outing`
**Auth Required:** Yes

**Request Body:**
```json
{
  "reason": "Buying groceries",
  "fromTime": "2026-02-10T17:00:00Z",
  "toTime": "2026-02-10T20:00:00Z"
}
```

---

## 🔍 Search (Admin Only)

### 7. Search Students
**Endpoint:** `POST /profile/student/search`
**Auth Required:** Yes (Director/Dean/Security)

**Request Body (Filters):**
```json
{
  "username": "O21",  // Partial match search
  "branch": "CSE",    // Optional
  "year": "3",        // Optional
  "page": 1,
  "limit": 10
}
```

**Success Response (200 OK):**
```json
{
  "success": true,
  "students": [
    {
      "username": "O210008",
      "name": "DESU SREECHARAN",
      "branch": "CSE"
    }
    // ... more students
  ],
  "pagination": {
    "page": 1,
    "totalPages": 5,
    "total": 50
  }
}
```

---

## ⚠️ Common Error Codes
*   **401 Unauthorized**: Invalid or missing Token.
*   **403 Forbidden**: You do not have permission (e.g., Student trying to search students).
*   **404 Not Found**: Resource does not exist.
*   **409 Conflict**: You already have a pending outpass request.
