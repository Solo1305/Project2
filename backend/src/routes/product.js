import express from "express";
import {addProduct,getProducts,deleteProduct,updateProduct} from "../controllers/productController.js";


const router=express.Router()


router.post("/addproduct",(req,res)=>{
  addProduct(req,res);

})

router.get("/getproducts",(req,res)=>{
  getProducts(req,res);
})

router.delete("/deleteproduct/:id",(req,res)=>{
  deleteProduct(req,res);
}
)

router.patch("/updateproduct/:edit",(req,res)=>{
updateProduct(req,res)
})
export default router