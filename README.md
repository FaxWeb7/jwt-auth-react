## React JWT Authentication (without Redux) with Node.js back-end

This is JWT Authentication example with email confirmation, the backend of which is written in Node.js with a MongoDB database, and the frontend in React with LocalStorage, React Router and Axios. I’ll show you:

- JWT Authentication Flow for User Signup & User Login
- Project Structure for MERN JWT Authentication project
- JWT Authentification with email confirmation

## Getting Started

1. Installation NPM packages
   ```xml
   npm install 
   npm install --server
   npm install --client
   ```
   
2. Set configuration. Create your configuration variables in /server/.env
    ```js
    // /server/.env

    PORT=8080 
    MONGO_URL={your_url}
    JWT_ACCESS_SECRET={your_access_secret}
    JWT_REFRESH_SECRET={your_refresh_secret}
    EMAIL={your_email}  // email address to send email verification codes
    PASSWORD={your_email_password}
    API_URL={server_url}
    CLIENT_URl={client_url}
    ```
   
3. Run project (project directory)
   ```js
   npm run dev 
   ```

## Server Endpoints
For this example, server has only 6 endpoints:

- POST `/api/registration` - for User Registration
- POST `/api/login` - for User Login
- POST `/api/logout` - for User Logout
- POST `/api/activate/:link` - for email confirmation
- GET `/api/refresh` - for User refresh
- GET `/api/users` - for get all users 

## **DB Screenshots**

|  User model	|   Token model
|:-:	|:-:	
|  ![Image 1](https://i.ibb.co/yhfqJG9/2023-03-29-22-20-05.png)	|   ![Image 2](https://i.ibb.co/27NQgYy/2023-03-29-22-20-34.png)
