const User = require('../models/userModel');

const userController = {
    createUser: async(req, res) => {
        const {name, email, age} = req.body;
        try {
            const user = new User({name, email, age});
            await user.save();
            return res.status(201).json({msg: 'User created successfully'});
        } catch (error) {
            if(error.code === 11000){
                return res.status(400).json({msg: 'Email already exists'});
            }
            return res.status(500).json({msg: error.message});
        }
    },

    getAllUser: async(req, res) => {
        try {
            const users = await User.find();
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },

    getUserById: async(req, res) => {
        const {id} = req.params;
        try {
            const user = await User.findById(id);
            if(!user){
                return res.status(404).json({msg: 'User not found'});
            }
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }
};

module.exports = userController;