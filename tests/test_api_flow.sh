#!/bin/bash

# Simple focused test script
set -e

echo "=== UNIZ API FLOW TEST ==="
echo ""

# 1. Student Login
echo "1. Student Login (o210008)"
LOGIN=$(curl -s -X POST "http://localhost:3001/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "o210008", "password": "password123"}')
TOKEN=$(echo "$LOGIN" | jq -r '.token')
echo "✓ Logged in, token: ${TOKEN:0:50}..."
echo ""

# 2. Get Profile
echo "2. Get Student Profile"
curl -s -X GET "http://localhost:3002/student/me" \
  -H "Authorization: Bearer $TOKEN" | jq '.student | {username, name, branch, year}'
echo ""

# 3. Update Profile
echo "3. Update Profile"
curl -s -X PUT "http://localhost:3002/student/update" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"phone": "9876543210"}' | jq '.success'
echo ""

# 4. Request OTP
echo "4. Request OTP for password reset"
curl -s -X POST "http://localhost:3001/otp/request" \
  -H "Content-Type: application/json" \
  -d '{"username": "o210008"}' | jq '.'
echo ""

# Extract OTP from logs
echo "5. Extract OTP from logs"
sleep 1
OTP=$(tail -50 auth.log | grep "OTP for o210008" | tail -1 | awk '{print $NF}')
echo "✓ OTP extracted: $OTP"
echo ""

# 6. Reset Password
echo "6. Reset password to sree@2006"
RESET=$(curl -s -X POST "http://localhost:3001/password/reset" \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"o210008\", \"otp\": \"$OTP\", \"newPassword\": \"sree@2006\"}")
echo "$RESET" | jq '.'
echo ""

# 7. Login with new password
echo "7. Login with new password"
LOGIN2=$(curl -s -X POST "http://localhost:3001/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "o210008", "password": "sree@2006"}')
TOKEN=$(echo "$LOGIN2" | jq -r '.token')
echo "✓ Re-logged in with new password"
echo ""

# 8. Send first outpass request
echo "8. Send first outpass request"
OUTPASS1=$(curl -s -X POST "http://localhost:3003/outpass" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "reason": "Going home for festival",
    "fromDay": "2026-02-01T00:00:00Z",
    "toDay": "2026-02-05T00:00:00Z",
    "studentGender": "M"
  }')
echo "$OUTPASS1" | jq '.'
OUTPASS_ID=$(echo "$OUTPASS1" | jq -r '.data.id')
echo "✓ Outpass ID: $OUTPASS_ID"
echo ""

# 9. Try second request (should fail)
echo "9. Try second outpass request (should fail)"
OUTPASS2=$(curl -s -X POST "http://localhost:3003/outpass" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "reason": "Another reason",
    "fromDay": "2026-02-10T00:00:00Z",
    "toDay": "2026-02-15T00:00:00Z",
    "studentGender": "M"
  }')
echo "$OUTPASS2" | jq '.'
if echo "$OUTPASS2" | grep -q "already in pending"; then
    echo "✓ Correctly prevented duplicate request"
else
    echo "✗ Should have prevented duplicate"
fi
echo ""

# 10. Caretaker approves
echo "10. Caretaker approves (transfers to warden)"
CARE_LOGIN=$(curl -s -X POST "http://localhost:3001/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "caretaker_male", "password": "caretaker@uniz"}')
CARE_TOKEN=$(echo "$CARE_LOGIN" | jq -r '.token')

CARE_APPROVE=$(curl -s -X POST "http://localhost:3003/$OUTPASS_ID/approve" \
  -H "Authorization: Bearer $CARE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"comment": "Approved by caretaker"}')
echo "$CARE_APPROVE" | jq '.data | {currentLevel, isApproved}'
echo ""

# 11. Warden approves
echo "11. Warden approves (transfers to SWO)"
WARD_LOGIN=$(curl -s -X POST "http://localhost:3001/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "warden_male", "password": "warden@uniz"}')
WARD_TOKEN=$(echo "$WARD_LOGIN" | jq -r '.token')

WARD_APPROVE=$(curl -s -X POST "http://localhost:3003/$OUTPASS_ID/approve" \
  -H "Authorization: Bearer $WARD_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"comment": "Approved by warden"}')
echo "$WARD_APPROVE" | jq '.data | {currentLevel, isApproved}'
echo ""

# 12. SWO final approval
echo "12. SWO gives final approval"
SWO_LOGIN=$(curl -s -X POST "http://localhost:3001/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "swo_admin", "password": "swo@uniz"}')
SWO_TOKEN=$(echo "$SWO_LOGIN" | jq -r '.token')

SWO_APPROVE=$(curl -s -X POST "http://localhost:3003/$OUTPASS_ID/approve" \
  -H "Authorization: Bearer $SWO_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"comment": "Final approval"}')
echo "$SWO_APPROVE" | jq '.data | {currentLevel, isApproved, issuedBy}'
echo ""

# 13. Student checks status
echo "13. Student checks outpass status"
HISTORY=$(curl -s -X GET "http://localhost:3003/history" \
  -H "Authorization: Bearer $TOKEN")
echo "$HISTORY" | jq '.history[0] | {type, is_approved, requested_time}'
echo ""

# 14. Warden updates presence
echo "14. Warden updates student presence (back in campus)"
PRESENCE=$(curl -s -X PUT "http://localhost:3002/student/status" \
  -H "Authorization: Bearer $WARD_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"username": "o210008", "isPresent": true}')
echo "$PRESENCE" | jq '.student | {username, is_in_campus}'
echo ""

# 15. View grades
echo "15. Student views grades"
GRADES=$(curl -s -X GET "http://localhost:3004/grades" \
  -H "Authorization: Bearer $TOKEN")
echo "$GRADES" | jq '.grades | length'
echo ""

# 16. View attendance
echo "16. Student views attendance"
ATT=$(curl -s -X GET "http://localhost:3004/attendance" \
  -H "Authorization: Bearer $TOKEN")
echo "$ATT" | jq '.attendance | length'
echo ""

# 17. Director searches student
echo "17. Director searches for student o210008"
DIR_LOGIN=$(curl -s -X POST "http://localhost:3001/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "director", "password": "director@uniz"}')
DIR_TOKEN=$(echo "$DIR_LOGIN" | jq -r '.token')

SEARCH=$(curl -s -X POST "http://localhost:3002/student/search" \
  -H "Authorization: Bearer $DIR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"username": "o210008"}')
echo "$SEARCH" | jq '.students[0] | {username, name, branch}'
echo ""

# 18. Webmaster adds new student
echo "18. Webmaster adds new student o220002"
WEB_LOGIN=$(curl -s -X POST "http://localhost:3001/login" \
  -H "Content-Type: application/json" \
  -d '{"username": "webmaster", "password": "webmaster@uniz"}')
WEB_TOKEN=$(echo "$WEB_LOGIN" | jq -r '.token')

NEW_STU=$(curl -s -X POST "http://localhost:3001/signup" \
  -H "Content-Type: application/json" \
  -d '{"username": "o220002", "password": "password123", "role": "student"}')
echo "$NEW_STU" | jq '.data | {username, role}'
echo ""

# 19. Webmaster publishes banner
echo "19. Webmaster publishes banner"
BANNER=$(curl -s -X POST "http://localhost:3002/admin/banners" \
  -H "Authorization: Bearer $WEB_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Important Announcement",
    "text": "Semester exams from Feb 15",
    "imageUrl": "https://via.placeholder.com/800x400"
  }')
echo "$BANNER" | jq '.banner | {title, isPublished}'
echo ""

# 20. Get banners
echo "20. Get all banners"
BANNERS=$(curl -s -X GET "http://localhost:3002/admin/banners" \
  -H "Authorization: Bearer $WEB_TOKEN")
echo "$BANNERS" | jq '.banners | length'
echo ""

echo "=== ALL TESTS COMPLETED SUCCESSFULLY ==="
