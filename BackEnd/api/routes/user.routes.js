var express = require('express');
var router = express.Router();
var {getallUser, getUser, createUser, updateUser, deleteUser} = require('../controllers/user.controller');

router.get('/users',getallUser);
router.get('/user/:userId',getUser);
router.post('/register', createUser);
router.put('/user/:userId', updateUser); // Use PUT method for updating user
router.delete('/user/:userId', deleteUser);

module.exports = router;