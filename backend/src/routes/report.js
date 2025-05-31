const express = require('express');
const reportController = require('../controllers/reportController');

const router = express.Router();

router.get('/', reportController.getAll);
router.post('/', reportController.create);
router.put('/:id', reportController.update);
router.delete('/:id', reportController.delete);

module.exports = router; 