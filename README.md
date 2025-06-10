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

bash
git clone https://github.com/your-username/multi-tenant-platform.git
cd multi-tenant-platform

## ⚙️ Configure Database
Create a PostgreSQL database and a tenants table:

CREATE TABLE tenants (
  id SERIAL PRIMARY KEY,
  tenant_name VARCHAR(255) NOT NULL,
  domain VARCHAR(255) NOT NULL,
  target_port INTEGER NOT NULL
);

---

## 📖 How it Works
- Enter tenant name, domain (like app1.local), and app path in the admin dashboard.
- App files are copied to the Nginx html folder.
- Nginx config is auto-generated for the new tenant.
- Nginx reloads to serve the app.
- Tenant becomes accessible at http://app1.local
- App statuses can be viewed in real-time from the dashboard.

## 🌐 Localhost Domain Mapping

- Add entries to your C:\Windows\System32\drivers\etc\hosts: 

  - 127.0.0.1 app1.local
  - 127.0.0.1 app2.local

---

## 📸 Screenshots
Coming soon!

---

## 📜 License
This project is licensed under the MIT License.
