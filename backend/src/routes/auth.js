const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Rotas públicas
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

// Rota protegida (exemplo)
router.get('/me', authMiddleware, (req, res) => {
  res.json({ userId: req.userId, role: req.userRole });
});

module.exports = router; 