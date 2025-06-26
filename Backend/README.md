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
