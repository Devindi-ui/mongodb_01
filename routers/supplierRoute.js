const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.post('/create', supplierController.createSupplier);

module.exports = router;