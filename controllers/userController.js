const User = require('../models/userModel');

const userController = {
    createUser: async(req, res) => {
        const {name, email, age} = req.body;
        try {
            const user = new User({name, email, age});
            await user.save();
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }
}

module.exports = userController;