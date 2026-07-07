const Product = require("../model/product_model");

async function createProduct(req,res){
    try{
        const product = await Product.create(req.body);
        res.status(200).json({
            success:true,
            data: product,
        })
    }catch(error){
        res.json({
            success: false,
            message:error.message,
        })
    }
};
async function getProduct(req,res){
    try{
        const product = await Product.find();
        res.status(200).json({
            success:true,
            count: product.length,
            data: product,
        })
    }catch(error){
        res.json({
            success: false,
            message:error.message,
        })
    }
};
async function getProductById(req,res){
    try{
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(400).json({
                success:false,
                message: "Product not found",
            })
        }
        res.status(200).json({
            success:true,
            data: product,
        })
    }catch(error){
        res.json({
            success: false,
            message:error.message,
        })
    }
};
async function updateProduct(req,res){
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body);
        if(!product){
            res.status(400).json({
                success:false,
                message: "Product not found",
            })
        }
        res.status(200).json({
            success:true,
            data: product,
        })
    }catch(error){
        res.json({
            success: false,
            message:error.message,
        })
    }
};async function deleteProduct(req,res){
    try{
        const product = await Product.findByIdAndDelete(req.params.id);
        if(!product){
            res.status(400).json({
                success:false,
                message: "Product not found",
            })
        }
        res.status(200).json({
            success:true,
            message:"Deleted"
        })
    }catch(error){
        res.json({
            success: false,
            message:error.message,
        })
    }
};
module.exports = {createProduct,getProduct,getProductById,updateProduct,deleteProduct};