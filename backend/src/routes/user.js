import express from 'express';
 
import {createUser,loginUser,getUsers, deleteUser} from '../controllers/userController.js';
const router = express.Router();


router.post("/register", async (req, res) => {
createUser(req,res);  
});

router.post("/login", async (req, res) => {
loginUser(req,res);
});

router.get("/getusers", async (req, res) => {
  getUsers(req,res)
   
})

router.delete("/deleteuser/:id", async (req, res) => {
  deleteUser(req,res)

})


export default router;