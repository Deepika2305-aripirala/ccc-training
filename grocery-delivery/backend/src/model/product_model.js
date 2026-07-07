const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    name: {
        type: String,
        
        trim: true,
        required: true,
    },
    description: {
        type: String,
        
        trim: true,
        required: true,
    },
    price:{
        type: Number,
        required:true,
    }
});

module.exports = mongoose.model("Product",productSchema);