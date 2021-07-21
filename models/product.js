const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        min:0

    },
    image:{
        type:String
    },
    price:{
        type:Number,
        required:true,
        min:0

    },
    desc:{
        type: String,
        required:true

    }   
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;
