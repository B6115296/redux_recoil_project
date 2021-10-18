const express = require('express');
const router = express.Router();

const { getAllUsers, getUserById, createUsers} = require('../controller/userControllers');

//@desc GET all user from db
//@route GET /api/users
//@access Public
router.get('/', getAllUsers);

//@desc GET a user by id from db
//@route GET /api/users/:id
//@access Public
router.get('/:id', getUserById);

//@desc POST a user by id from db
//@route POST /api/users/
//@access Public
router.post('/', createUsers);

module.exports = router;