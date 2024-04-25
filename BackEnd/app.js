var express = require('express');
var app = express();

var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
var cors = require('cors'); 
var cookieParser = require("cookie-parser");
var bcrypt = require("bcrypt");
const swaggerUI = require('swagger-ui-express');

var usersrouter = require('./api/routes/user.routes');
var roomsrouter = require('./api/routes/rooms.routes');
var admin = require('./api/routes/admin.routes');
var apiDoc = require('./middleware/_api-doc');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));

app.use('/api',usersrouter);
app.use('/api',roomsrouter);
app.use('/api',admin);

app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(apiDoc));


app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

module.exports = app;

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users
 *     responses:
 *       200:
 *         description: A list of users
 *
 *       500:
 *         description: Internal server error
 
 */

/**
* @swagger
 * /api/user/{userId}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve user data by user ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userId:
 *                   type: string
 *                   description: The user ID
 *                 IDCard:
 *                   type: string
 *                   description: The user's ID card number
 *                 Firstname:
 *                   type: string
 *                   description: The user's first name
 *                 Lastname:
 *                   type: string
 *                   description: The user's last name
 *                 Birthdate:
 *                   type: string
 *                   description: The user's birthdate
 *                 Gender:
 *                   type: string
 *                   description: The user's gender
 *                 Address:
 *                   type: string
 *                   description: The user's address
 *                 PhoneNumber:
 *                   type: string
 *                   description: The user's phone number
 *                 ProfilePicture:
 *                   type: string
 *                   description: URL of the user's profile picture
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided user data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               IDCard:
 *                 type: string
 *               Firstname:
 *                 type: string
 *               Lastname:
 *                 type: string
 *               Birthdate:
 *                 type: string
 *                 format: date
 *               Gender:
 *                 type: string
 *                 enum: [Male, Female]
 *               Address:
 *                 type: string
 *               PhoneNumber:
 *                 type: string
 *               ProfilePicture:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created successfully
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Failed to create user
 */

/**
 * @swagger
 * /api/user/{userId}:
 *   put:
 *     summary: Update user by ID
 *     description: Update user data by user ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               IDCard:
 *                 type: string
 *               Firstname:
 *                 type: string
 *               Lastname:
 *                 type: string
 *               Birthdate:
 *                 type: string
 *                 format: date
 *               Gender:
 *                 type: string
 *                 enum: [Male, Female]
 *               Address:
 *                 type: string
 *               PhoneNumber:
 *                 type: string
 *               ProfilePicture:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/user/{userId}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete user data by user ID
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/rooms:
 *   get:
 *     summary: Get all rooms
 *     description: Retrieve a list of all rooms
 *     responses:
 *       200:
 *         description: A list of rooms
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/room:
 *   post:
 *     summary: Create a new room
 *     description: Create a new room with the provided room data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RoomNumber:
 *                 type: string
 *               RoomType:
 *                 type: string
 *               Price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Room created successfully
 *       500:
 *         description: Internal server error
 * 
 * 
 */

/**
 * @swagger
 * /api/room/{roomId}:
 *   get:
 *     summary: Get room by ID
 *     description: Retrieve room data by room ID
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         description: ID of the room to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Room data retrieved successfully
 *       404:
 *         description: Room not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/room/{roomId}:
 *   put:
 *     summary: Update room by ID
 *     description: Update room data by room ID
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         description: ID of the room to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RoomNumber:
 *                 type: string
 *               RoomType:
 *                 type: string
 *               Price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Room updated successfully
 *       404:
 *         description: Room not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/room/{roomId}:
 *   delete:
 *     summary: Delete room by ID
 *     description: Delete room data by room ID
 *     parameters:
 *       - in: path
 *         name: roomId
 *         required: true
 *         description: ID of the room to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Room deleted successfully
 *       404:
 *         description: Room not found
 *       500:
 *         description: Internal server error
 */