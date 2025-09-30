// Item Schema
const mongoose = require('mongoose');
const { schema } = require('./userModel');

const itemSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true
        },
        
        description:{
            type: String,
            required: true
        },

        unitPrice:{
            type: Number,
            required: true
        },

        category:{
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Item', itemSchema);