// Project Approval Portal (PAP)

// ✅ OBJECTIVE
// A role-based portal to submit, approve, or reject project approval requests.
// Built using Node.js, Express, MongoDB, JWT, React.

// ✅ FINAL FOLDER STRUCTURE

// Backend (Node.js + Express + MongoDB)
project-approval-portal/
├── controllers/
│   ├── authController.js
│   └── projectController.js
│
├── models/
│   ├── User.js
│   └── ProjectRequest.js
│
├── middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── routes/
│   ├── authRoutes.js
│   └── projectRoutes.js
│
├── config/
│   └── db.js
│
├── utils/
│   └── jwt.js
│
├── app.js
├── .env
└── package.json

// Frontend (React)
client/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── Dashboard.jsx
│   │   └── ProjectForm.jsx
│   │
│   ├── api/
│   │   └── api.js
│   │
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── .env

// ✅ KEY FEATURES IMPLEMENTED
// 1. Signup/Login using JWT
// 2. Role-based Authorization (employee/manager/admin)
// 3. Project request flow
// 4. MongoDB schema with Mongoose
// 5. JWT + authMiddleware + roleMiddleware
// 6. Ready for frontend integration

// ✅ READY FOR TESTING & FRONTEND
// Next: Write Jest tests OR Build React UI

// 🔄 Future Add-ons
// - Email notifications
// - File upload
// - Admin dashboard

// ✅ You can run the backend with:
// npm run dev  (uses nodemon)

// ✅ MongoDB connection ready via db.js
// ✅ API endpoints tested via Postman

// Let me know if you want to continue with React UI now or switch to testing!
