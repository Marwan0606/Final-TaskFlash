const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json({tasks}) //REMEMBER THIS SHORTCUT TO tasks: tasks
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const getSingleTask = async (req, res) => {
  try {
    const id = req.params.id
    const taskID = id
    const task = await Task.findOne({_id: taskID})

    if (!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const updateTask = async (req, res) => {
  try {
    const id = req.params.id
    const taskID = id
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
      new: true,
      runValidators: true,
    }) 

    if (!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }

    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id
    const taskID = id
    const task = await Task.findOneAndDelete({_id: taskID})

    if (!task) {
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }

    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: error})
  }

}

const getTasksID = async (req, res) => {
  try {
    const id = req.params.userID
    const userID = id

    const tasks = await Task.find({creatorID: userID})

    if (!tasks) {
      return res.status(404).json({msg: `You have no tasks`})
    }

    res.status(200).json({tasks})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

module.exports = {
  getAllTasks,
  postTask,
  getSingleTask,
  deleteTask,
  updateTask,
  getTasksID
}