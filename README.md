# NestJS JWT Authentication API

This project is a simple NestJS application that demonstrates user management and JWT-based authentication. It includes a `UsersModule` for managing users and an `AuthModule` for handling authentication using JWT (JSON Web Token).

## Features

- **User Management**: A `GET /users` endpoint to retrieve a list of users.
- **JWT Authentication**: A `POST /auth/login` endpoint for user login that returns a JWT token. The `GET /users` endpoint is protected and requires a valid JWT token in the `Authorization` header.

## Setup Instructions

### 1. Clone the Repository

First, clone the repository from GitHub:

```bash
git clone https://github.com/your-username/nestjs-jwt-auth.git
cd nest-app
```

### 2. Install Dependencies

```bash
$ pnpm install
```

### Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

By default, the application will be running on http://localhost:3000.

### 4. Lint the Code

```bash
# lint
$ pnpm run lint
```

## API Documentation

### 1. Login (POST /auth/login)

This endpoint accepts a username and password, and returns a JWT token upon successful authentication.

- URL: `/auth/login`
- Method: `POST`
- Payload:
  ```
  {
    "username": "john",
    "password": "password"
  }
  ```
- Response (200 OK):
  ```
  {
    "access_token": "<JWT token>"
  }
  ```

### 2. Get All Users (GET /users/all)

This endpoint retrieves a list of users. It requires a valid JWT token in the `Authorization` header.

- URL: `/users/all`
- Method: `GET`
- Headers: `Authorization: Bearer <JWT token>`
- Response (200 OK):

  ```
  [
    {
        id: 1,
        username: 'admin',
        password: 'password',
      },
      {
        id: 2,
        username: 'jack',
        password: 'password123',
      },
  ]
  ```

  ### 3. Get One User (GET /users)

This endpoint retrieves a list of users. It requires a valid JWT token in the `Authorization` header.

- URL: `/users`
- Method: `GET`
- Headers: `Authorization: Bearer <JWT token>`
- Response (200 OK):
  ```
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
  ]
  ```

## Testing the API

### 1. Login and Get a JWT Token

To test the API, first, request a JWT token by sending a POST request to `/auth/login`.

```bash
curl -X POST http://localhost:3000/auth/login \
-H "Content-Type: application/json" \
-d '{"username": "admin", "password": "password"}'
```

You should receive a response with a JWT token like this:

```
{
  "access_token": "<JWT token>"
}
```

### 2. Use the JWT Token to Access Protected Route - Get All Users

Next, use the JWT token to access the `GET /users/all` endpoint. In Postman, or using cURL, include the token in the Authorization header:

```bash
curl -X GET http://localhost:3000/users/all \
-H "Authorization: Bearer <JWT token>"
```

This should return the list of users:

```
  [
    {
        id: 1,
        username: 'admin',
        password: 'password',
      },
      {
        id: 2,
        username: 'jack',
        password: 'password123',
      },
  ]
```

### 3. Use the JWT Token to Access Protected Route - Get Single User

Next, use the JWT token to access the `GET /users/?username=""` endpoint. In Postman, or using cURL, include the token in the Authorization header:

```bash
curl -X GET http://localhost:3000/users/?username=jack' \
-H "Authorization: Bearer <JWT token>"
```

This should return the list of users:

```
{
  id: 2,
  username: 'jack',
  password: 'password123',
}
```