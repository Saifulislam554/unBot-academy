const express = require('express');
const passport = require('passport');
const router = express.Router();

// User registration route
router.post('/register', (req, res) => {
  // Implement user registration logic here
});

// User login route
router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard', // Redirect to dashboard on successful login
  failureRedirect: '/login',    // Redirect to login page on failure
}));

// User logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
