var express = require('express');
var router = express.Router();
var { postUsersForSidebar ,getUsersForSidebar, getUser } = require("../controllers/user.controller");
/* GET users listing. */
router.post('/',postUsersForSidebar);
router.get('/',getUser);

module.exports = router;
