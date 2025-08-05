const express = require('express')
const router = express.Router()

const {
  getAllTasks, postTask, getSingleTask, updateTask, deleteTask, getTasksID
} = require('../controllers/tasks')

router.get('/', getAllTasks)

router.post('/', postTask)

router.get('/:id', getSingleTask)

router.patch('/:id', updateTask)

router.delete('/:id', deleteTask)

router.get('/user/:userID', getTasksID)

module.exports = router