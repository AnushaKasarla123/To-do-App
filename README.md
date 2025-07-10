# 🎯 To-do Event Manager App

A clean and user-friendly full-stack **Event Manager** application that allows users to **register**, **log in**, and **add, edit, or delete events** — all without using a database. Designed with simplicity and speed in mind.

---

## 🚀 Features

- 📝 Register & Login with in-memory authentication
- ✅ Create, Edit, and Delete events
- 🔐 Session token stored locally (simple auth)
- 🎨 Beautiful & responsive UI with custom styling
- ⚙️ Backend powered by Node.js & Express

---

## 🛠 Tech Stack

| Frontend       | Backend        | Tools & Libraries     |
|----------------|----------------|------------------------|
| React.js       | Express.js     | Axios                  |
| HTML, CSS      | Node.js        | Nodemon                |

---

## 📂 Folder Structure

To-do-App/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/ # Login, Register, TodoApp
│ │ ├── App.js
│ │ └── index.js
│ └── public/
│
├── server/ # Node.js Backend
│ ├── controllers/
│ ├── routes/
│ ├── users.js # In-memory user storage
│ └── server.js
│
└── README.md

yaml
Copy
Edit

---

## ⚙️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/AnushaKasarla123/To-do-App.git
cd To-do-App
Start Backend
bash
Copy
Edit
cd server
npm install
npm start
Start Frontend
bash
Copy
Edit
cd ../client
npm install
npm start
Open http://localhost:3000 in your browser 🚀

🔐 Usage Guide
✅ Create Account: Use the "Create Account" button to register.

🔐 Login: Use the credentials to log in.

🗓️ Manage Events: Add, update, and delete your events.

🚪 Logout: Click "Logout" to end session.

⚠️ Note
This app uses in-memory storage — all data is lost on server restart.

Built for learning, rapid prototyping, and frontend-backend integration practice.

🤝 Contributing
Contributions are welcome! Feel free to open issues or pull requests to improve the app.

📬 Contact
Anusha Kasarla
CSE Student
