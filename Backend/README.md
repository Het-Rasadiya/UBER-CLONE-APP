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

---

# API Documentation: /users/profile

## Endpoint

`GET /users/profile`

## Description
This endpoint returns the profile information of the currently authenticated user. The request must include a valid JWT token in the cookie or Authorization header.

## Headers
- `Authorization: Bearer <token>` (if not using cookies)

## Response

### Success Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
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
- **Status Code:** `401 Unauthorized` (if not authenticated)
- **Response Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

---

# API Documentation: /users/logout

## Endpoint

`GET /users/logout`

## Description
This endpoint logs out the currently authenticated user by clearing the authentication token cookie and blacklisting the token. The request must include a valid JWT token in the cookie or Authorization header.

## Headers
- `Authorization: Bearer <token>` (if not using cookies)

## Response

### Success Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "message": "Logged out successfully"
}
```

### Error Responses
- **Status Code:** `401 Unauthorized` (if not authenticated)
- **Response Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

---

# API Documentation: Captain Endpoints

## 1. Register Captain

### Endpoint
`POST /captains/register`

### Description
Registers a new captain with vehicle information. Validates input, hashes the password, and creates a new captain in the database. Returns a JWT token and captain details on success.

### Request Body
```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (min 3 characters, optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)",
  "vehicle": {
    "color": "string (min 3 characters, required)",
    "plate": "string (min 3 characters, required)",
    "capacity": "number (min 1, required)",
    "vehicleType": "string (car|motorcycle|auto, required)"
  }
}
```

#### Example Request Body
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response
#### Success Response
- **Status Code:** `201 Created`
- **Response Body:**
```json
{
  "token": "string (JWT token)",
  "captain": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "active|inactive"
  }
}
```

#### Error Responses
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
2. **Duplicate Email**
   - **Status Code:** `400 Bad Request`
   - **Response Body:**
     ```json
     {
       "message": "Captain with this email already exists"
     }
     ```

### Notes
- The password is hashed before storage.
- The email must be unique.
- A JWT token is generated upon successful registration.

---

## 2. Captain Login

### Endpoint
`POST /captains/login`

### Description
Allows a captain to log in using their email and password. Returns a JWT token and captain details if credentials are valid.

### Request Body
```json
{
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)"
}
```

#### Example Request Body
```json
{
  "email": "jane.smith@example.com",
  "password": "securepassword"
}
```

### Response
#### Success Response
- **Status Code:** `200 OK`
- **Response Body:**
```json
{
  "token": "string (JWT token)",
  "captain": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "active|inactive"
  }
}
```

#### Error Responses
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
       "message": "Invalid email or password"
     }
     ```
     or
     ```json
     {
       "message": "Invalid password or email"
     }
     ```

---

## 3. Captain Profile

### Endpoint
`GET /captains/profile`

### Description
Returns the profile information of the currently authenticated captain. Requires a valid JWT token in the cookie or Authorization header.

### Headers
- `Authorization: Bearer <token>` (if not using cookies)

### Response
#### Success Response
- **Status Code:** `200 OK`
- **Response Body:**
```json
{
  "captain": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "active|inactive"
  }
}
```

#### Error Responses
- **Status Code:** `401 Unauthorized` (if not authenticated)
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## 4. Captain Logout

### Endpoint
`GET /captains/logout`

### Description
Logs out the currently authenticated captain by clearing the authentication token cookie and blacklisting the token. Requires a valid JWT token in the cookie or Authorization header.

### Headers
- `Authorization: Bearer <token>` (if not using cookies)

### Response
#### Success Response
- **Status Code:** `200 OK`
- **Response Body:**
```json
{
  "message": "Logged out successfully"
}
```

#### Error Responses
- **Status Code:** `401 Unauthorized` (if not authenticated)
- **Response Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```
