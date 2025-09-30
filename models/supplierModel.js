//Supplier schema
const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        nic: {
            type: Number,
            required: true,
            unique: true
        },

        city: {
            type: String,
            required: true
        },

        contact: {
            type: Number,
            required: true
        }

    }
)

module.exports = mongoose.model('Supplier', supplierSchema);