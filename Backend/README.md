# API Documentation: /users/register

## Endpoint

`POST /users/register`

## Description

This endpoint is used to register a new user in the system. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON Web Token (JWT) and the user details.

## Request Body

The request body should be a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (min 3 characters, optional)"
  },
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

### Example Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

## Response

### Success Response

**Status Code:** `201 Created`

**Response Body:**

```json
{
  "token": "string (JWT token)",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

### Error Responses

1. **Validation Error**

   - **Status Code:** `400 Bad Request`
   - **Response Body:**
     ```json
     {
       "errors": [
         {
           "msg": "string (error message)",
           "param": "string (field name)",
           "location": "string (body)"
         }
       ]
     }
     ```

2. **Missing Required Fields**
   - **Status Code:** `400 Bad Request`
   - **Response Body:**
     ```json
     {
       "error": "Missing required fields"
     }
     ```

## Notes

- The `password` field is hashed before being stored in the database.
- The `email` field must be unique.
- A JWT token is generated upon successful registration.

---

# API Documentation: /users/login

## Endpoint

`POST /users/login`

## Description
This endpoint allows an existing user to log in using their email and password. If the credentials are valid, it returns a JWT token and the user details.

## Request Body
The request body should be a JSON object with the following structure:

```json
{
  "email": "string (valid email format, required)",
  "password": "string (min 6 characters, required)"
}
```

### Example Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

## Response

### Success Response

**Status Code:** `200 OK`

**Response Body:**

```json
{
  "token": "string (JWT token)",
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
}
```

### Example Success Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGQwZmU0ZjUzMTEyMzYxNjhhMTA5Y2EiLCJpYXQiOjE2MjQyMzQ0MDB9.abc123def456ghi789jkl012mno345pqr678stu901vwx234yz567",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Error Responses

1. **Validation Error**
   - **Status Code:** `400 Bad Request`
   - **Response Body:**
     ```json
     {
       "errors": [
         {
           "msg": "string (error message)",
           "param": "string (field name)",
           "location": "string (body)"
         }
       ]
     }
     ```

2. **Invalid Credentials**
   - **Status Code:** `404 Not Found` or `401 Unauthorized`
   - **Response Body:**
     ```json
     {
       "message": "Invalid email or Password"
     }
     ```
     or
     ```json
     {
       "message": "Invalid password or Email"
     }
     ```

## Notes
- The password is not returned in the response.
- A JWT token is generated upon successful login.
