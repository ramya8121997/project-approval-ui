# Project Approval Portal - React Frontend

This is the frontend for the **Project Approval Portal** built using **React**. It supports user authentication and role-based dashboards for Managers and Employees.

## 📁 Folder Structure

```
project-approval-ui/
│
├── public/                 # Static assets (index.html, favicon, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Page components (Login, Dashboards)
│   ├── services/           # Axios API calls
│   ├── utils/              # Helper functions
│   ├── App.js              # Main app component with routing
│   ├── index.js            # React root render
├── .env                    # Environment variables
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js** (v18+ recommended)
* **npm** or **yarn**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/project-approval-ui.git
cd project-approval-ui
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root folder with the following:

```
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

> Adjust the URL if your backend runs on a different port or domain.

4. **Start the development server**

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 👥 Roles

* **Manager**: Can approve or reject employee project requests.
* **Employee**: Can submit new project requests and view status updates.

Role-based dashboard routing is handled in `App.js` using conditional route rendering based on `user?.role`.

---

## 🛠️ Available Scripts

```bash
npm start           # Run the app in development mode
npm run build       # Create a production build
npm test            # Run test suite (if available)
npm run lint        # Lint your code (if linting is configured)
```

---

## ⚙️ Tech Stack

* React
* React Router DOM
* Axios
* Bootstrap or Tailwind CSS
* dotenv for environment variable management

---

## ✅ Features

* 🔐 Role-based login
* 📄 Employee request submission
* 📋 Manager approval dashboard
* 🌐 Axios-based API communication
* 📱 Responsive design

---


