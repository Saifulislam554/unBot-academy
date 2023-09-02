// adminRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Protected route that requires admin privileges
router.get('/admin-panel', authMiddleware.isAdmin, (req, res) => {
  // This route handler will only execute if the user is an admin
  res.render('admin-panel');
});

module.exports = router;
