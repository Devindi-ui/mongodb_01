const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

router.post('/create', supplierController.createSupplier);
router.get('/all', supplierController.getAllSuppliers);
router.get('/find/:id', supplierController.getSupplierById);
router.put('/update/:id', supplierController.updateSupplier);
router.delete('/delete/:id', supplierController.deleteSupplier);

module.exports = router;