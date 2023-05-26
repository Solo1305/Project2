import User from "../schemas/user.js"

export const createUser= async(req,res)=>{

  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  

  try {
    const exists = await User.findOne({ username }, "-_id name");
    if (exists) return res.status(409).send("taken");
    
    const user = new User({ username, password, email });
    await user.save();
    res.status(200).send("User created");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }

}

export const loginUser= async(req,res)=>{
  const username = req.body.username;
  const password = req.body.password;

  try {
      const user = await User.findOne({ username, password }, "-id -password -__v");
      if (!user) return res.status(401).json({message:"Incorrect", status:401});
             res.status(200).json({data:user, status:200});
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
}

export const getUsers= async(req,res)=>{
  try {
      const users = await User.find({}, "-id -password -__v");
      if (!users) return res.status(401).json({message:"Incorrect", status:401});
          const customers=users.filter((user)=>user.accountType==="customer");
             res.status(200).json({data:customers, status:200});
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
}

export const deleteUser= async(req,res)=>{

  const id= req.params.id;
   try {
       
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(401).json({message:"Incorrect", status:401});
    res.status(200).json({data:user, status:200});
    
   } catch (error) {
    console.log(error);
    res.status(500).json(error);
   }


}