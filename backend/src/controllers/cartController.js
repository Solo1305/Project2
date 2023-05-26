import User from "../schemas/user.js"


export const addToCart= async(req,res)=>{

   
   const {title,desc,price,image}=req.body.product;
    
   const count=req.body.count;
   const {username}=req.body.user;

  try {

    let cartitem = await User.find({
      username: username,
      cart: { $elemMatch: {title:title} },
    });
    console.log("cart is", cartitem.length)

    if (cartitem.length !== 1) {
      let data = await User.updateOne(
        { username },
        { $push: { cart: { title, desc, price, image } } }
      );
      res.status(200).send("Item added to cart");
    } else {
      res.status(200).send("Item already exists");
    }


      
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }

}

export const getCartItems= async(req,res)=>{

  const username=req.params.username;
  
  try {
    const cartitems = await User.find({username}, { cart: 1, _id: 0 });    
    res.status(200).send(cartitems);    

  } catch (error) {    
    console.log(error);
    res.status(500).send(error);

  }
}

export const removeFromCart= async(req,res)=>{
  const username=req.params.username;
  const id=req.params.id;
  
  try {     
    let data=await User.updateOne({username},{$pull:{cart:{_id:id}}})
    res.status(200).send("Item removed from cart");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
        
  }
}