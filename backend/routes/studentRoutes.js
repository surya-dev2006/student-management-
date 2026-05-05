const express = require('express');
const router = express.Router();
const { getStudents, addStudent, updateStudent, deleteStudent } = require('../controllers/studentController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getStudents);
router.post('/', protect, addStudent);
router.put('/:id', protect, updateStudent);
router.delete('/:id', protect, deleteStudent);

module.exports = router;