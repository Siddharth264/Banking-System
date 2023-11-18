const express = require('express');
const {getAllUsers, createUser, updateUser} = require('../controllers/userController')
const router = express.Router();


router.get('/', getAllUsers).post('/', createUser).patch('/', updateUser)


module.exports = router