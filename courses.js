const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Create a new course
router.post('/', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// More routes for updating and deleting courses can be added here

module.exports = router;
