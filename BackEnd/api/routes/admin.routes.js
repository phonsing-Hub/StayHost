var express = require('express');
var router = express.Router();
var {admin} = require('../controllers/admin.controller');

router.post('/admin', admin);

module.exports = router;
