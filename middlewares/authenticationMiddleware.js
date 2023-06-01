const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  try {
    const normalToken = req.cookies.Normal_Token || "";

    // Verify the token
    jwt.verify(normalToken, process.env.NORMAL_KEY, (err, decoded) => {
      if (err) return res.status(401).json({ message: "Invalid token" });
      next();
    });
  } catch (error) {}
};

module.exports = { authentication };
