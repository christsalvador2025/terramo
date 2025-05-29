# 🌍 Terramo Project

This is a full-stack project consisting of a **Python-based backend** and a **Node.js frontend**. Follow the steps below to set up the project on your local machine.

---

## 📦 Backend Setup (`terramo-backend`)

### ✅ Prerequisites

Make sure the following are installed on your system:

- **Python** (version 3.10 to 3.12)
- **pip**
- **[Laragon](https://laragon.org/)** (for local database and phpMyAdmin)

---

### ⚙️ Configuration & Setup

1. **Start Laragon**, open **phpMyAdmin**, and create a new database:

   ```
   terramo_data
   ```

2. **Import the SQL file**  
   The SQL file is located in the root of the `terramo-backend` directory. Use phpMyAdmin to import it into the `terramo_data` database.

3. **Open a terminal or VS Code**, navigate to the backend directory:

   ```bash
   cd terramo-backend
   ```

4. Ensure you are in the same directory as `main.py`.

---

### 🧪 Virtual Environment Setup

Activate your Python virtual environment:

- On **Windows**:
  ```bash
  venv\Scripts\activate
  ```

- On **macOS/Linux**:
  ```bash
  source venv/bin/activate
  ```

---

### 📦 Install Dependencies

Install the required Python packages:

```bash
py -m pip install -r requirements.txt
```

---

### 🚀 Run the Backend Server

Start the backend server with:

```bash
py main.py
```

Once running, the terminal will display a local URL. Open it in your browser.

To view the interactive API documentation, go to:

```
[your-local-url]/docs
```

---

## 🌐 Frontend Setup (`terramo-frontend`)

### ✅ Prerequisites

Make sure you have **Node.js** installed (version 18 to 22 recommended).

---

### ⚙️ Setup & Run

1. Open a terminal and navigate to the frontend folder:

   ```bash
   cd terramo-frontend
   ```

2. Confirm you're in the directory containing `package.json`.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. After it starts, visit the local URL provided in your terminal to access the frontend interface.

---

## 🔐 Login Credentials

Use the following credentials to log into the application:

- **Username**: `test@terramo.com`  
- **Password**: `Tester123!`

---

## 📝 Notes

- Ensure the backend server is running **before** starting the frontend.
- All API endpoints and documentation are available at `/docs` on the backend URL.
- If you encounter errors related to database or packages, verify that:
  - The database `terramo_data` exists and was imported correctly.
  - Python packages are installed without errors.
  - Node packages installed successfully.

---

## 📁 Project Structure

```
terramo-backend/
├── main.py
├── venv/
├── requirements.txt
├── config/
└── database.sql

terramo-frontend/
├── package.json
├── public/
├── src/
└── ...
```

---

## 🛠 Technologies Used

**Backend**:
- Python 3.x
- FastAPI
- MySQL (via Laragon)

**Frontend**:
- Node.js
- Vite
- Vue/React (depending on your framework)

---

## 💬 Contact

For any issues or questions, please reach out to the development team.

---