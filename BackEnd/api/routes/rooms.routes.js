var express = require('express');
var router = express.Router();

var {getBookingsWithRooms} = require ('../controllers/rooms.controller')

router.get('/',getBookingsWithRooms);

module.exports = router;