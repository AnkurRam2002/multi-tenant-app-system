# 🚀 Multi-Tenant App Deployment Platform

A full-stack platform to deploy and manage multiple tenant web applications (like React apps) dynamically on a single server, each accessible through its own custom domain/subdomain — all managed via an admin dashboard!

---

## ✨ Features

- 📦 Deploy static web apps with custom tenant names and domains.
- 📂 Automatic Nginx config generation and reloading.
- 💾 PostgreSQL database integration for tenant metadata storage.
- 🖥️ Admin dashboard to view all deployed apps and their status.
- 🟢 Real-time app status check (Online/Offline).
- 🎨 Frontend built with React & Tailwind CSS.
- ⚙️ Backend API with Node.js, Express, and PostgreSQL.
- 📡 Localhost domain mapping via Windows `hosts` file.
- 🔒 CORS handled via Nginx for cross-origin frontend-to-tenant requests.

---

## 📦 Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express, PostgreSQL (node-postgres)
- **Web Server:** Nginx (Windows)
- **Deployment:** Localhost (with support for DigitalOcean or VPS)

---

## 🛠️ Setup Instructions

### 📥 Clone the repository

```bash
git clone https://github.com/your-username/multi-tenant-platform.git
cd multi-tenant-platform
