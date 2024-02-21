const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/taskController');

router.get('/', tasksController.getAllTasks);
router.post('/', tasksController.createTask);
router.patch('/:id', tasksController.updateTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;
