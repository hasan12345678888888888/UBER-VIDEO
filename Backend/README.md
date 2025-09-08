# 📌 API Documentation

This API registers a new user in the system.

Endpoint:
POST /users/register

---

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}


Field Details:
fullname.firstname (string, required): Minimum 3 characters

fullname.lastname (string, optional): Minimum 3 characters if provided

email (string, required): Must be a valid email address

password (string, required): Minimum 6 characters


Example Request
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }'


Responses
201 Created → User registered successfully.
Response Example:
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  },
  "token": "JWT_TOKEN"
}


400 Bad Request → Validation failed.
Response Example:
{
  "errors": [
    "Email must be valid",
    "Password must be at least 6 characters"
  ]
}
