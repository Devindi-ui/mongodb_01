const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/create', categoryController.createCategory);
router.get('/all', categoryController.getAllCategories);
router.get('/find/:id', categoryController.getCategoryById);

module.exports = router;