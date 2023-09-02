// authMiddleware.js

const passport = require('passport');

// Middleware function to check if a user is authenticated
exports.isAuthenticated = (req, res, next) => {
  // Passport.js adds the `req.isAuthenticated()` method
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, proceed to the next middleware/route handler
  }
  
  // User is not authenticated, you can customize the response (e.g., redirect to login)
  res.status(401).send('Unauthorized: Please log in to access this page.');
};

// Middleware function to check if a user is an administrator
exports.isAdmin = (req, res, next) => {
  // Check if the user is authenticated and has an 'isAdmin' flag set
  if (req.isAuthenticated() && req.user.isAdmin) {
    return next(); // User is an admin, proceed to the next middleware/route handler
  }
  
  // User is not an admin, send a 403 Forbidden response
  res.status(403).send('Access Denied: You are not an administrator.');
};
