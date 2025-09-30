const Supplier = require('../models/supplierModel');

const SupplierController = {
    createSupplier: async(req, res) => {
        const {name, nic, city, contact} = req.body;
        try {
            const supplier = new Supplier({name, nic, city, contact});
            await supplier.save();
            return res.status(201).json({msg: 'Supplier created successfully!'});
        } catch (error) {
            if(error.code === 11000){ //unique
                return res.status(400).json({msg: 'NIC already exists'});
            }
            return res.status(500).json({msg: error.message});
        }
    }
};

module.exports = SupplierController;