const User = require('../models/User')
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.status(200).json({user})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    
    const user = await User.findOne({email: email})
    
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(400).json({msg: 'Invalid credentials'})
    }

    /*
    const token = jwt.sign(
      {userId: user._id, name: user.name},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    )
    */

    res.status(200).json({user});

  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const getUser = async (req, res) => {
  try {
    const id = req.params.id
    const userID = id
    const user = await User.findOne({_id: userID})

    if (!user) {
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }
    
    res.status(200).json({user})
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

const updateUser = (req, res) => {
  res.json(`Delete User`)
}

const deleteUser = (req, res) => {
  res.json(`Update User`)
}

module.exports = {
  createUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser
}