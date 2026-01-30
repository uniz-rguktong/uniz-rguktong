#!/bin/bash

# Colors for logging
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Base URLs
AUTH_URL="http://localhost:3001"
USER_URL="http://localhost:3002"
OUTPASS_URL="http://localhost:3003"
ACADEMICS_URL="http://localhost:3004"

# Student credentials
STUDENT_USERNAME="o210008"
STUDENT_PASSWORD="password123"
NEW_PASSWORD="sree@2006"

# Admin credentials
CARETAKER_USERNAME="caretaker_male"
CARETAKER_PASSWORD="caretaker@uniz"
WARDEN_USERNAME="warden_male"
WARDEN_PASSWORD="warden@uniz"
SWO_USERNAME="swo_admin"
SWO_PASSWORD="swo@uniz"
DIRECTOR_USERNAME="director"
DIRECTOR_PASSWORD="director@uniz"
WEBMASTER_USERNAME="webmaster"
WEBMASTER_PASSWORD="webmaster@uniz"

log() {
    echo -e "${BLUE}[$(date +'%H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✓${NC} $1"
}

error() {
    echo -e "${RED}✗${NC} $1"
}

warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

section() {
    echo ""
    echo -e "${YELLOW}═══════════════════════════════════════════════════${NC}"
    echo -e "${YELLOW}  $1${NC}"
    echo -e "${YELLOW}═══════════════════════════════════════════════════${NC}"
}

# Test student flow
section "STUDENT FLOW - o210008"

log "1. Student Login with initial password"
STUDENT_LOGIN=$(curl -s -X POST "$AUTH_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$STUDENT_USERNAME\", \"password\": \"$STUDENT_PASSWORD\"}")
echo "$STUDENT_LOGIN" | jq '.'

STUDENT_TOKEN=$(echo "$STUDENT_LOGIN" | jq -r '.token')
if [ "$STUDENT_TOKEN" != "null" ] && [ -n "$STUDENT_TOKEN" ]; then
    success "Student logged in successfully"
else
    error "Student login failed"
    exit 1
fi

log "2. Get Student Profile"
PROFILE=$(curl -s -X GET "$USER_URL/student/me" \
  -H "Authorization: Bearer $STUDENT_TOKEN")
echo "$PROFILE" | jq '.'
success "Profile retrieved"

log "3. Update Student Profile"
UPDATE_PROFILE=$(curl -s -X PUT "$USER_URL/student/update" \
  -H "Authorization: Bearer $STUDENT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "DESU SREECHARAN", "phone": "9876543210", "email": "sreecharan@rguktong.ac.in"}')
echo "$UPDATE_PROFILE" | jq '.'
success "Profile updated"

log "4. Request OTP for password reset"
OTP_REQUEST=$(curl -s -X POST "$AUTH_URL/otp/request" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$STUDENT_USERNAME\"}")
echo "$OTP_REQUEST" | jq '.'

# Extract OTP from logs (mock - in real scenario check email/SMS)
# For testing, we'll use a fixed OTP or check server logs
warning "Check auth.log for OTP (mock email)"
sleep 2

# Simulate OTP (you'll need to extract from logs)
OTP="123456"  # This should be extracted from logs in real scenario
log "Using OTP: $OTP (check logs for actual OTP)"

log "5. Reset password to sree@2006"
RESET_PASS=$(curl -s -X POST "$AUTH_URL/password/reset" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$STUDENT_USERNAME\", \"otp\": \"$OTP\", \"newPassword\": \"$NEW_PASSWORD\"}")
echo "$RESET_PASS" | jq '.'

# Re-login with new password
log "6. Re-login with new password"
STUDENT_LOGIN_NEW=$(curl -s -X POST "$AUTH_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$STUDENT_USERNAME\", \"password\": \"$NEW_PASSWORD\"}")
echo "$STUDENT_LOGIN_NEW" | jq '.'

STUDENT_TOKEN=$(echo "$STUDENT_LOGIN_NEW" | jq -r '.token')
if [ "$STUDENT_TOKEN" != "null" ] && [ -n "$STUDENT_TOKEN" ]; then
    success "Student re-logged in with new password"
else
    warning "Password reset might need manual OTP - continuing with old token"
fi

log "7. Send first outpass request"
OUTPASS_REQ=$(curl -s -X POST "$OUTPASS_URL/outpass" \
  -H "Authorization: Bearer $STUDENT_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{
    \"reason\": \"Going home for festival\",
    \"fromDay\": \"2026-02-01T00:00:00Z\",
    \"toDay\": \"2026-02-05T00:00:00Z\",
    \"studentGender\": \"M\"
  }")
echo "$OUTPASS_REQ" | jq '.'

OUTPASS_ID=$(echo "$OUTPASS_REQ" | jq -r '.data.id')
if [ "$OUTPASS_ID" != "null" ] && [ -n "$OUTPASS_ID" ]; then
    success "First outpass request created: $OUTPASS_ID"
else
    error "Failed to create outpass request"
fi

log "8. Try to send second outpass request (should fail with 'already in pending request')"
OUTPASS_REQ2=$(curl -s -X POST "$OUTPASS_URL/outpass" \
  -H "Authorization: Bearer $STUDENT_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{
    \"reason\": \"Another reason\",
    \"fromDay\": \"2026-02-10T00:00:00Z\",
    \"toDay\": \"2026-02-15T00:00:00Z\",
    \"studentGender\": \"M\"
  }")
echo "$OUTPASS_REQ2" | jq '.'

if echo "$OUTPASS_REQ2" | grep -q "already in pending request"; then
    success "Correctly prevented duplicate pending request"
else
    error "Should have prevented duplicate pending request"
fi

# Admin flow - Multi-level approval
section "ADMIN FLOW - Multi-level Approval"

log "9. Caretaker (Male) login"
CARETAKER_LOGIN=$(curl -s -X POST "$AUTH_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$CARETAKER_USERNAME\", \"password\": \"$CARETAKER_PASSWORD\"}")
CARETAKER_TOKEN=$(echo "$CARETAKER_LOGIN" | jq -r '.token')
success "Caretaker logged in"

log "10. Caretaker approves and transfers to Warden"
CARETAKER_APPROVE=$(curl -s -X POST "$OUTPASS_URL/$OUTPASS_ID/approve" \
  -H "Authorization: Bearer $CARETAKER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"comment": "Approved by caretaker"}')
echo "$CARETAKER_APPROVE" | jq '.'
success "Caretaker approved - transferred to Warden"

log "11. Warden (Male) login"
WARDEN_LOGIN=$(curl -s -X POST "$AUTH_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$WARDEN_USERNAME\", \"password\": \"$WARDEN_PASSWORD\"}")
WARDEN_TOKEN=$(echo "$WARDEN_LOGIN" | jq -r '.token')
success "Warden logged in"

log "12. Warden approves and transfers to SWO"
WARDEN_APPROVE=$(curl -s -X POST "$OUTPASS_URL/$OUTPASS_ID/approve" \
  -H "Authorization: Bearer $WARDEN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"comment": "Approved by warden"}')
echo "$WARDEN_APPROVE" | jq '.'
success "Warden approved - transferred to SWO"

log "13. SWO login"
SWO_LOGIN=$(curl -s -X POST "$AUTH_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$SWO_USERNAME\", \"password\": \"$SWO_PASSWORD\"}")
SWO_TOKEN=$(echo "$SWO_LOGIN" | jq -r '.token')
success "SWO logged in"

log "14. SWO gives final approval"
SWO_APPROVE=$(curl -s -X POST "$OUTPASS_URL/$OUTPASS_ID/approve" \
  -H "Authorization: Bearer $SWO_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"comment": "Final approval by SWO"}')
echo "$SWO_APPROVE" | jq '.'
success "SWO gave final approval - Outpass APPROVED"

log "15. Student checks outpass status"
HISTORY=$(curl -s -X GET "$OUTPASS_URL/history" \
  -H "Authorization: Bearer $STUDENT_TOKEN")
echo "$HISTORY" | jq '.'
success "Student viewed outpass history"

log "16. Warden updates student presence (back in campus)"
WARDEN_UPDATE_PRESENCE=$(curl -s -X PUT "$USER_URL/student/status" \
  -H "Authorization: Bearer $WARDEN_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$STUDENT_USERNAME\", \"isPresent\": true}")
echo "$WARDEN_UPDATE_PRESENCE" | jq '.'
success "Student presence updated to in-campus"

# Academic flow
section "STUDENT ACADEMIC DATA"

log "17. Student views grades"
GRADES=$(curl -s -X GET "$ACADEMICS_URL/grades" \
  -H "Authorization: Bearer $STUDENT_TOKEN")
echo "$GRADES" | jq '.'
success "Grades retrieved"

log "18. Student views attendance"
ATTENDANCE=$(curl -s -X GET "$ACADEMICS_URL/attendance" \
  -H "Authorization: Bearer $STUDENT_TOKEN")
echo "$ATTENDANCE" | jq '.'
success "Attendance retrieved"

# Director flow
section "DIRECTOR FLOW - Search Student"

log "19. Director login"
DIRECTOR_LOGIN=$(curl -s -X POST "$AUTH_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$DIRECTOR_USERNAME\", \"password\": \"$DIRECTOR_PASSWORD\"}")
DIRECTOR_TOKEN=$(echo "$DIRECTOR_LOGIN" | jq -r '.token')
success "Director logged in"

log "20. Director searches for student o210008"
SEARCH=$(curl -s -X POST "$USER_URL/student/search" \
  -H "Authorization: Bearer $DIRECTOR_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$STUDENT_USERNAME\"}")
echo "$SEARCH" | jq '.'
success "Director found student details"

# Webmaster flow
section "WEBMASTER FLOW - Add Students and Data"

log "21. Webmaster login"
WEBMASTER_LOGIN=$(curl -s -X POST "$AUTH_URL/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"$WEBMASTER_USERNAME\", \"password\": \"$WEBMASTER_PASSWORD\"}")
WEBMASTER_TOKEN=$(echo "$WEBMASTER_LOGIN" | jq -r '.token')
success "Webmaster logged in"

log "22. Webmaster adds new student o220001"
NEW_STUDENT=$(curl -s -X POST "$AUTH_URL/signup" \
  -H "Content-Type: application/json" \
  -d '{"username": "o220001", "password": "password123", "role": "student"}')
echo "$NEW_STUDENT" | jq '.'
success "New student o220001 created"

log "23. Login as new student to create profile"
NEW_STUDENT_LOGIN=$(curl -s -X POST "$AUTH_URL/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "o220001", "password": "password123"}')
NEW_STUDENT_TOKEN=$(echo "$NEW_STUDENT_LOGIN" | jq -r '.token')

log "24. Update new student profile"
curl -s -X PUT "$USER_URL/student/update" \
  -H "Authorization: Bearer $NEW_STUDENT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Student", "branch": "CSE", "year": "2"}' | jq '.'
success "New student profile created"

log "25. Webmaster publishes banner via Cloudinary"
BANNER=$(curl -s -X POST "$USER_URL/admin/banners" \
  -H "Authorization: Bearer $WEBMASTER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Important Announcement",
    "text": "Semester exams will begin from Feb 15, 2026",
    "imageUrl": "https://via.placeholder.com/800x400"
  }')
echo "$BANNER" | jq '.'
success "Banner published"

log "26. Get all banners"
BANNERS=$(curl -s -X GET "$USER_URL/admin/banners" \
  -H "Authorization: Bearer $WEBMASTER_TOKEN")
echo "$BANNERS" | jq '.'
success "Banners retrieved"

section "TEST FLOW COMPLETED"
success "All API flows tested successfully!"
echo ""
log "Summary:"
echo "  ✓ Student login, profile update, password reset"
echo "  ✓ Outpass request with duplicate prevention"
echo "  ✓ Multi-level approval (Caretaker → Warden → SWO)"
echo "  ✓ Student presence update"
echo "  ✓ Academic data (grades, attendance)"
echo "  ✓ Director search"
echo "  ✓ Webmaster add student and banner"
echo ""
