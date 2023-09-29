const express = require('express');
const contractController = require('../controllers/clientController');

const router = express.Router();
 
router.post('/upload', contractController.uploadContract);

module.exports = router;

