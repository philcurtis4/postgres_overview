const router = require('express').Router();
const Query = require('../lib/Query');

//GET route to send all students
// localhost:3333/api/students
router.get('/students', async (req, res) => {
		const students = await Query.getStudents();

		res.json(students);
});

//GET route to send all courses
// localhost:3333/api/courses
router.get('/courses', async (req, res) => {
	const courses = await Query.getCourses();

	res.json(courses);
});

//Create routes

// POST Create a course
//post request to localhost:3333/api/courses
router.post('/courses', async (req, res) => {
	const formData = req.body;

	await Query.addCourse(formData);

	res.json({
		messsge: 'Course created successfully!'
	});
});

//POST Create a student
//post request to localhost:3333/api/students
router.post('/students', async (req, res) => {
	const formData = req.body;

	await Query.addStudent(formData);

	res.json({
		messsge: 'Student added successfully!'
	});
});


module.exports = router;