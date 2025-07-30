// controllers/userController.js
import db from '../config/db.js';

// Get all users
export const getAllUsers = (req, res) => {
  db.query('SELECT id, name, username, email, dob, contact_number, role FROM users', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};

// Get user by ID
export const getUserById = (req, res) => {
  const userId = req.params.id;
  db.query('SELECT id, name, username, email, dob, contact_number, role FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(results[0]);
  });
};

// Update user by ID
export const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, username, email, dob, contact_number, role } = req.body;

  const query = `
    UPDATE users
    SET name = ?, username = ?, email = ?, dob = ?, contact_number = ?, role = ?
    WHERE id = ?
  `;

  db.query(query, [name, username, email, dob, contact_number, role, userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated successfully" });
  });
};

// Delete user by ID
export const deleteUser = (req, res) => {
  const userId = req.params.id;

  db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  });
};
