import express from "express";
import { addToCart,getCartItems,removeFromCart } from "../controllers/cartController.js";
const router = express.Router();


router.post("/addproduct", (req, res) => {
 addToCart(req,res)
})


router.get("/getcartitems/:username", (req, res) => {
  getCartItems(req,res)
})

router.patch("/removefromcart/:username/:id", (req, res) => {
  removeFromCart(req,res)
})


export default router;