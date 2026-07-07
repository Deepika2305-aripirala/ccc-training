const express = require("express");
const router = express.Router();

const {createProduct,getProduct,getProductById,updateProduct,deleteProduct} = require("../controllers/product_controller")
router.post("/",createProduct)
router.get("/",getProduct)
router.get("/:id",getProductById)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)
module.exports = router
