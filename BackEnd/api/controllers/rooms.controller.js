const { initMySQL } = require("../../db");

const Rooms = async (req, res) => {
  try {
    const conn = await initMySQL(); // Call initMySQL to get the connection object
    const [result] = await conn.query("SELECT * FROM Rooms");
    res.json(result);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
  
  module.exports = {
    Rooms
};