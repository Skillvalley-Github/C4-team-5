const express = require('express');
const contractController = require('./../controllers/contractController');

const router = express.Router();
 
router.post('/upload', contractController.uploadContract);

module.exports = router;

