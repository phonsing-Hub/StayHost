var express = require('express');
var router = express.Router();
var { postUsersForSidebar ,getUsersForSidebar } = require("../controllers/user.controller");
/* GET users listing. */
router.post('/',postUsersForSidebar);
router.get('/',getUsersForSidebar);

module.exports = router;
