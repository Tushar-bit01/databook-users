cat <<EOF > README.md
# 📘 Databook Users

A full-stack **User Management CRUD application** built with **Node.js**, **Express**, **MySQL**, and **EJS**.  
It allows users to be added, viewed, edited, and deleted through a clean, server-rendered UI.

---

## 🔧 Features

- ➕ Add new users with email & password
- 🔍 View all users in a styled table
- ✏️ Edit username after verifying password
- ❌ Delete user after email & password verification
- 📊 User count displayed on homepage
- 🧠 Fully dynamic with server-side rendering (EJS)

---

## 📂 Project Structure

\`\`\`
databook-users/

├── views/                 # EJS templates

│   ├── home.ejs

│   ├── showuser.ejs

│   ├── new.ejs

│   ├── edit.ejs

│   ├── deleteuser.ejs

│   └── error.ejs

├── schema.sql             # MySQL table schema

├── .env                   # Environment variables (DB creds)

├── .gitignore

├── package.json

├── README.md

└── index.js               # Main Express app

\`\`\`

---

## 🧪 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MySQL
- **Templating**: EJS
- **Styling**: Inline CSS (custom UI)
- **Utilities**: Faker.js, UUID, dotenv, method-override

---

## 🚀 Getting Started

### 1️⃣ Clone the repo:

\`\`\`
git clone https://github.com/Tushar-bit01/databook-users.git

cd databook-users
\`\`\`

### 2️⃣ Install dependencies:

\`\`\`
npm install
\`\`\`

### 3️⃣ Set up .env file:
Create a \`.env\` file in root with your DB credentials:

\`\`\`

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=your_mysql_password

DB_NAME=tushar_app

\`\`\`

### 4️⃣ Set up MySQL database:

- Open MySQL
- Run the schema:
- 
\`\`\`

CREATE DATABASE tushar_app;

USE tushar_app;


CREATE TABLE user (

    id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
    
);
\`\`\`

OR just import \`schema.sql\`.

---

### 5️⃣ Start the server:
\`\`\`bash
node index.js
\`\`\`

App will run at:  
👉 \`http://localhost:3000\`

---

## 🤝 Author

Made with 💙 by [Tushar Yadav](https://github.com/Tushar-bit01)

---

## 📜 License

This project is for learning/demo purposes. No license applied.
EOF