import express from 'express';
import * as authController from '../controllers/authController.js';  // make sure to add .js extension

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;
