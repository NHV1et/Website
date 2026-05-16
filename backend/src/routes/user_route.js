
import express from "express";
import connection from '../config/database.js';
const user_router = express.Router();

// register
user_router.post("/register", (req, res) => {
  const { username, password } = req.body;

  console.log("Register:", username, password);

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required",
    });
  }


  const sql_query = "INSERT INTO stiln_db.users (USERNAME, PASS_WORD) VALUES (?, ?)";
  connection.query(sql_query, [username, password], (err, results) => {
    if (err) {
      console.error("Error inserting user into database:", err);
      return res.status(500).json({
        message: "Database error",
      });
    }
    console.log("User registered with ID:", results.insertId);
    res.status(201).json({
      message: "User registered successfully",
    });
  });
});

// login 
user_router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("Login:", username, password);
  if (!username || !password) {
    return res.status(400).json({
      message: "Username and password are required",
    });
  }
  const sql_query = "SELECT * FROM stiln_db.users WHERE USERNAME = ? AND PASS_WORD = ?";
  connection.query(sql_query, [username, password], (err, results) => {
    if (err) {
      console.error("Error occurred while querying the database:", err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    res.json({
      message: "Login OK ✅",
    });
  });
});

export default user_router;
