const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.get('/all', userController.getAllUser);
router.get('/find/:id', userController.getUserById);
router.put('/update/:id', userController.updateUser);

module.exports = router;