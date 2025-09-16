# 📚 Digital Library System

## 📝 Project Description  
The **Digital Library System** is a web-based application designed to automate library operations such as managing books, members, issuing and returning books, fine calculation, and book search.  
It demonstrates practical usage of DBMS concepts (CRUD operations, relationships, and data integrity) while providing a simple, user-friendly interface for managing library resources efficiently.

---

## ⚡ Features  
- Add, update, and delete books and member information  
- Issue and return books with automatic date tracking  
- Search books by title, author, or category  
- Admin dashboard displaying statistics (books, members, issued books)  
- Responsive and user-friendly interface

---

## 🚀 Technologies Used  
- ✅ Database: MySQL  
- ✅ Backend: Node.js  
- ✅ Frontend: HTML, CSS  
- ✅ Version Control: Git & GitHub  
- ✅ Environment Variables for sensitive configuration

---

## ⚙️ Setup Instructions

### 1️⃣ Install Node.js  
Download and install from [https://nodejs.org](https://nodejs.org)

---

### 2️⃣ Install MySQL  
Install MySQL Server from [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)  
- Set up your root user and password  
- Create the required database for the project

---

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the project root with your database connection settings, e.g.:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=digital_library_db

---

### Install Dependencies & Start Project
# Navigate to project folder
cd Digital-Library-System

# Install project dependencies
npm install express mysql body-parser

# (Optional) Install nodemon globally
npm install -g nodemon

# Start the server
node server.js
