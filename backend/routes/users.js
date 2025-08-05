const express = require('express')
const router = express.Router()

const {
  createUser, loginUser, getUser, updateUser, deleteUser
} = require('../controllers/users')


router.post('/register', createUser)

router.post('/login', loginUser)

router.get('/:id', getUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router