const Category = require('../models/categoryModel');

const categoryController = {
    createCategory: async(req, res) => {
        const {name, desc} = req.body;
        try {
            const category = new Category({name, desc});
            await category.save();
            return res.status(201).json({msg:'Category created successfully!'});
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },

    getAllCategories: async(req, res) => {
        try {
            const categories = await Category.find();
            return res.status(200).json(categories);
        } catch (error) {
            return res.status(500),json({msg: error.message});
        }
    }
};

module.exports = categoryController;