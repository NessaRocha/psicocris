const express = require('express');
const inviteController = require('../controllers/inviteController');

const router = express.Router();

router.post('/', inviteController.create);
router.get('/', inviteController.list);

module.exports = router; 