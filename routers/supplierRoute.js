const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.post('/create', supplierController.createSupplier);
router.get('/all', supplierController.getAllSuppliers);
router.get('/find/:id', supplierController.getSupplierById);

module.exports = router;