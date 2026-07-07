const express = require("express")
const cors = require("cors")

const app = express()
const userRoutes = require("./routes/user_route");
const productRoutes = require("./routes/product_route");
const orderRoutes = require("./routes/order_route.js");
app.use(cors())
app.use(express.json())

app.get("/",(req,res) =>{
    res.json({
        success: true,
        message: "API running",
    });
});
app.use("/users",userRoutes);
app.use("/products",productRoutes);
app.use("/orders",orderRoutes);
module.exports = app;