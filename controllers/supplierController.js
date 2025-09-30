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
    },

    getAllSuppliers: async(req, res) => {
        try {
            const suppliers = await Supplier.find();
            return res.status(200).json(suppliers);
        } catch (error) {
            return res.status(500).json({msg: error.message});
        }
    },

    getSupplierById: async(req, res) => {
        try {
            const {id} = req.params;
            const supplier = await Supplier.findById(id);

            if(!supplier){
                return res.status(404).json({msg: 'Supplier not found.'});
            }
            return res.status(200).json(supplier);

        } catch (error) {
            if(error.kind === 'objectId'){
                return res.status(500).json({msg: error.message});
            }
            return res.status(500).json({msg: error.message});
        }
    }
};

module.exports = SupplierController;