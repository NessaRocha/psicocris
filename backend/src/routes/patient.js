const express = require('express');
const patientController = require('../controllers/patientController');

const router = express.Router();

router.get('/', patientController.getAll);
router.post('/', patientController.create);
router.post('/public/patient-register', patientController.createPublic);
router.put('/:id', patientController.update);
router.delete('/:id', patientController.delete);

module.exports = router; 