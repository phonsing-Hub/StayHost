var express = require('express');
var router = express.Router();
var {Rooms, createRoom, getRoom, updateRoom, deleteRoom} = require ('../controllers/rooms.controller')

router.get('/rooms',Rooms);
router.get('/room/:roomId',getRoom);
router.post('/room', createRoom);
router.put('/room/:roomId', updateRoom);
router.delete('/room/:roomId', deleteRoom);

module.exports = router;