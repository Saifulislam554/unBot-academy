const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Define the MongoDB URI and connect to the database
const mongoURI = 'mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Use express.json() middleware to parse JSON request bodies
app.use(express.json());

// Load and use your routes
const coursesRouter = require('./routes/courses');
const dashboardRoutes = require('./routes/dashboardRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use('/courses', coursesRouter);
app.use('/dashboard', dashboardRoutes);
app.use('/admin', adminRoutes);

// Other route definitions and middleware can be added here

// Start the server
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
