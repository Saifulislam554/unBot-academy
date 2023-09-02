// dashboardRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Protected route that requires user authentication
router.get('/dashboard', authMiddleware.isAuthenticated, (req, res) => {
  // This route handler will only execute if the user is authenticated
  res.render('dashboard');
});

module.exports = router;
