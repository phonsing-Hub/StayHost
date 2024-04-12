const { initMySQL } = require("../../db");

const getallUser = async (req, res) => {
  try {
    const conn = await initMySQL(); // Call initMySQL to get the connection object
    const [result] = await conn.query("SELECT * FROM Users");
    res.json(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const conn = await initMySQL();
    const [result] = await conn.query(
      `
        INSERT INTO Users (IDCard, Firstname, Lastname, Birthdate, Gender, Address, PhoneNumber, ProfilePicture)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        userData.IDCard,
        userData.Firstname,
        userData.Lastname,
        userData.Birthdate,
        userData.Gender,
        userData.Address,
        userData.PhoneNumber,
        userData.ProfilePicture,
      ]
    );

    if (result.affectedRows === 1) {
      res.status(201).json({ message: "User created successfully" });
    } else {
      res.status(500).json({ error: "Failed to create user" });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.userId; // Assuming the user ID is passed as a route parameter named userId
    const conn = await initMySQL(); // Assuming you have an initMySQL function to establish a database connection

    // Query the database to fetch the user with the specified ID
    const [userRows] = await conn.query(
      "SELECT * FROM Users WHERE UserID = ?",
      [userId]
    );

    // If no user with the specified ID is found, send a 404 Not Found response
    if (userRows.length === 0)
      res.status(404).json({ error: "User not found" });
    // If a user with the specified ID is found, send the user data as JSON response
    else res.json(userRows[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userData = req.body; // Assuming user data to update is sent in the request body

    const conn = await initMySQL();
    const [result] = await conn.query("UPDATE Users SET ? WHERE UserID = ?", [
      userData,
      userId,
    ]);

    if (result.affectedRows === 0)
      res.status(404).json({ error: "User not found" });
    else res.json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const conn = await initMySQL();
    const [result] = await conn.query("DELETE FROM Users WHERE UserID = ?", [
      userId,
    ]);

    if (result.affectedRows === 0)
      res.status(404).json({ error: "User not found" });
    else res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getallUser, getUser, createUser, updateUser, deleteUser };
