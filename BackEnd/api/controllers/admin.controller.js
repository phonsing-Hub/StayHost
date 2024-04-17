const { initMySQL } = require("../../db");
var jwt = require("jsonwebtoken");

const admin = async (req, res) => {
  const { username, pass } = req.body;
  const adminData = { username, pass };
  const secret = 'mysecret';
  const conn = await initMySQL();

  try {
    const [adminRows] = await conn.query(
        "SELECT AdminID, Username, Password FROM Admins WHERE Username = ? AND Password = ?",
        [adminData.username, adminData.pass] 
      );
    
    if (adminRows.length === 0) res.status(404).json({ error: "Admin not found" });
    else{
    // create jwt
    const AdminID = {
        ID: adminRows[0].AdminID,
        name: adminRows[0].Username
    }
    const token = jwt.sign({AdminID, role: 'admin'},secret, {expiresIn: '1h'});
    res.send(token)
    }
  } catch (error) {
    console.error("Error fetching admin:", error);
    res.status(401).json({ error: "Login fail", errorMessage: error.message });
  }
};

module.exports = { admin };
