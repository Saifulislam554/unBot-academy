const Course = require('../models/Course');

// Display a list of courses
exports.courseList = function (req, res) {
  Course.find({}, (err, courses) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.render('courses-list', { courses });
    }
  });
};

// Display details for a specific course
exports.courseDetail = function (req, res) {
  Course.findById(req.params.id, (err, course) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (!course) {
      res.status(404).send('Course not found');
    } else {
      res.render('course-detail', { course });
    }
  });
};

// Display a form to create a new course
exports.courseCreateGet = function (req, res) {
  res.render('course-create');
};

// Handle course creation on POST
exports.courseCreatePost = function (req, res) {
  // Implement course creation logic here
  // Retrieve data from req.body and save the new course to the database
};

// Display a form to update a course
exports.courseUpdateGet = function (req, res) {
  Course.findById(req.params.id, (err, course) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (!course) {
      res.status(404).send('Course not found');
    } else {
      res.render('course-update', { course });
    }
  });
};

// Handle course update on POST
exports.courseUpdatePost = function (req, res) {
  // Implement course update logic here
  // Retrieve data from req.body and update the course in the database
};

// Handle course deletion on POST
exports.courseDeletePost = function (req, res) {
  Course.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/courses');
    }
  });
};
