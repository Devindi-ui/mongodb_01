const User = require('../models/userModel');

const userController = {
    createUser: async(req, res) => {
        const {name, email, age} = req.body;
        try {
            const user = new User({name, email, age});
            await user.save();
            return res.status(201).json({msg: 'User created successfully'});
        } catch (error) {
            if(error.code === 11000){   //If unique only
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
        try {
            const {id} = req.params;
            const user = await User.findById(id);
            
            if(!user){
                return res.status(404).json({msg: 'User not found'});
            }
            return res.status(200).json(user);

        } catch (error) {
            if(error.kind === 'objectedId'){
                return res.status(500).json({msg: error.message});
            }
            return res.status(500).json({msg: error.message});
        }
    },

    updateUser: async(req, res) => {
        try {
            const {id} = req.params;
            const {name, email, age} = req.body;
            const user = await User.findByIdAndUpdate(
                id,
                {name, email, age},
                {new: true},
            );

            if(!user){return res.status(404).json({msg: 'User not found'});}
            return res.status(200).json({msg: 'User updated successfully', user});

        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },

    deleteUser: async(req, res) => {
        try {
            const {id} = req.params;
            const user = await User.findByIdAndDelete(id);

            if(!user){return res.status(404).json({msg: 'User not found'});}
            return res.status(200).json({msg: 'User deleted successfully'});
            
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }
};

module.exports = userController;