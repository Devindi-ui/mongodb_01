const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/create', itemController.createItem);
router.get('/all', itemController.getAllItems);
router.get('/find/:id', itemController.getItemById);
router.put('/update/:id', itemController.updateItem);
router.delete('/delete/:id', itemController.deleteItem);

module.exports = router;