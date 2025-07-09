# 📘 User Management App (CRUD with MySQL + Express + EJS)

A simple User Management System built with:

- Node.js (Express.js)
- MySQL2
- EJS templating engine
- Faker.js for dummy data
- Method Override for PATCH/DELETE
- dotenv for environment security

----------------------------------------

📁 Project Structure:

.
├── views/             # EJS templates (home, showuser, edit, new, deleteuser, error)

├── schema.sql         # SQL file to create database and user table

├── .env               # DB credentials (ignored by git)

├── index.js           # Main Express app

├── package.json

└── README.md

----------------------------------------

🚀 Features:

- View all users
- Add new user
- Edit username (with password check)
- Delete user (with email + password confirmation)
- Home page with total user count

----------------------------------------

⚙️ Setup Instructions:

1️⃣ Clone the repo:

git clone https://github.com/your-username/user-management-app.git
cd user-management-app

2️⃣ Install dependencies:

npm install

3️⃣ Create `.env` file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=tushar_app

4️⃣ Create MySQL database & table:

CREATE DATABASE tushar_app;

USE tushar_app;

CREATE TABLE user (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

5️⃣ Start the server:

node index.js

App runs at: http://localhost:3000

----------------------------------------

🛠 Tech Stack:

- Express.js
- MySQL2
- EJS
- Faker.js
- UUID
- Method-Override
- dotenv

----------------------------------------

✨ Future Improvements:

- Form validations
- Hash passwords using bcrypt
- REST API version
- Add pagination for user listing

----------------------------------------

👤 Author:

Tushar Yadav  
Learning Backend & Full Stack Web Dev

----------------------------------------

⭐ Star this repo if it helped you!
