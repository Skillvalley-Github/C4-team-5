const express = require('express');
const clientController = require('../controllers/clientController');

const router = express.Router();

router.post('/upload', clientController.uploadContract);
router.post('/upload', clientController.uploadInvoice);

module.exports = router;