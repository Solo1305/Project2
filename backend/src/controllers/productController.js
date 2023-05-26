import Product from "../schemas/product.js";



export const addProduct= async(req,res)=>{
  const {title,desc,price,image}=req.body;
  console.log(req.body);
   
  try {    
    const product = new Product({ title, desc, price, image });
    await product.save();
    res.status(200).send("Product added");

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    
  }

}

export const  getProducts= async(req,res)=>{
  try {
      const products = await Product.find({}, "-id -__v");
      if (!products) return res.status(401).json({message:"Incorrect", status:401});
          res.status(200).json({data:products, status:200});
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
}

export const deleteProduct= async(req,res)=>{

  const id= req.params.id;
   try {
       
    const product = await Product.findByIdAndDelete(id);
    if (!product) return res.status(401).json({message:"Incorrect", status:401});
    res.status(200).json({data:product, status:200});
    
   } catch (error) {
    console.log(error);
    res.status(500).json(error);
   }

}


export const updateProduct= async(req,res)=>{
  const id= req.params.edit;
  const {title,desc,price,image}=req.body;
  try {
    const updateItem=await Product.findOneAndUpdate(
      {_id:id}, { $set: { title,desc,price,image } }, { new: true }

    );
    if (!updateItem) return res.status(401).json({message:"Incorrect", status:401});
    res.status(200).json({data:updateItem, status:200});
     
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    
  }


}