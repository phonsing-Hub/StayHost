var express = require('express');
var router = express.Router();
var {Rooms} = require ('../controllers/rooms.controller')

router.get('/rooms',Rooms);
// router.get('/room/:roomId',getUser);
// router.post('/room', createUser);
// router.put('/room/:roomId', updateUser);
// router.delete('/room/:roomId', deleteUser);

module.exports = router;