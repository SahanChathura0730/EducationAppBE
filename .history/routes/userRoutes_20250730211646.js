// routes/userRoutes.js
import express from 'express';

const router = express.Router();

// Dummy route to get all users
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
  ]);
});

// Dummy route to get a user by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: `User ${id}`, email: `user${id}@example.com` });
});

// Dummy route to update a user by id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  // Normally update user in database here
  res.json({ message: `User ${id} updated` });
});

// Dummy route to delete a user by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // Normally delete user from database here
  res.json({ message: `User ${id} deleted` });
});

export default router;
