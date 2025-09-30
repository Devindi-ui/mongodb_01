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
    },

    getItemById: async(req, res) => {
        try {
            const {id} = req.params;
            const item = await Item.findById(id);
            if(!item){
                return res.status(404).json({msg: 'Item not found'});
            }
            return res.status(200).json(item);
        } catch (error) {
            if(error.kind === 'objectId'){
                return res.status(500).json({msg: error.message});
            }
            return res.status(500).json({msg: error.message});
        }
    },

    updateItem: async(req, res) => {
        try {
            const {id} = req.params;
            const {name, description, unitPrice, category} = req.body;
            const item = await Item.findByIdAndUpdate(
                id,
                {name, description, unitPrice, category},
                {new: true},
            );

            if(!item){return res.status(404).json({msg: 'Item not found'});}
            return res.status(200).json({msg:'Item updated successfully!', item});
            
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    }
}

module.exports = ItemController;