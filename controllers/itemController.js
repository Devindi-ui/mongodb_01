const Item =require('../models/itemModel');

const ItemController = {
    createItem: async(req, res) => {
        const {name, description, unitPrice, category} = req.body;
        try {
            const item = new Item({name, description, unitPrice, category});
            await item.save();
            return res.status(201).json({message: 'Item created successfully!'});
        } catch (error) {
            return res.status(500).json({msg: 'Server error'});
        }
    },

    getAllItems: async(req, res) => {
        try {
            const items = await Item.find();
            return res.status(200).json(items);
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }
}

module.exports = ItemController;