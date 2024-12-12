# Admin Dashboard Frontend (Angular)

This repository contains the frontend (Angular) portion of an Admin Dashboard application. It relies on a separate .NET 8 ASP.NET Core Web API backend to function properly.

## Prerequisites

- **Node.js** (LTS recommended): [Download Here](https://nodejs.org/)
- **Angular CLI**:  
  Install globally with:
  ```bash
  npm install -g @angular/cli
  ```
- **.NET 8 SDK**: [Download Here](https://dotnet.microsoft.com/en-us/download)
- **Git**: [Download Here](https://git-scm.com/downloads)

## Setup Instructions

1. **Clone the Backend Repo**:  
   First, you need to clone the backend application (ASP.NET Core Web API):
   ```bash
   git clone https://github.com/Keshish/STA.API backend
   ```

2. **Run the Backend**:
   Navigate into the backend directory and run:
   ```bash
   cd backend
   dotnet restore
   dotnet build
   dotnet run
   ```

   By default, the backend should run at `https://localhost:7038` (or `http://localhost:5000`), but this may vary based on your configuration. Ensure the backend is running before starting the frontend.

   **Default Credentials for Backend**:
  - Username: `admin`
  - Password: `Passord1!`

3. **Clone the Frontend Repo**:
   In a separate directory (not inside the backend folder), clone this frontend repo:
   ```bash
   git clone https://github.com/Keshish/admin-dashboard admin-dashboard
   ```
4. **Install Frontend Dependencies**:
   Navigate into the frontend directory:
   ```bash
   cd admin-dashboard
   npm install
   ```

5. **Adjust Configuration if Needed**:
   The frontend may be configured to call the backend via a proxy (`proxy.config.json`) or environment files. Ensure that the backend URL matches the actual running backend URL. If needed, edit the `src/environments/environment.ts` or `proxy.config.json` to reflect the correct backend URL.

6. **Run the Frontend**:
   Start the development server:
   ```bash
   ng serve
   ```

   By default, the application runs on `http://localhost:4200`. Open your browser and navigate there to access the admin dashboard.

7. **Logging In**:
   Use the default credentials (if the frontend requires login) as provided by the backend:
  - Username: `admin`
  - Password: `Passord1!`

