import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  accountType: {  
    type: String,     
    default: "customer",
  },
  cart: [
    {
      title: {
        type: String,
        required: false,        
      },
      desc: {
        type: String,
       required: false,
      },
      price: {
        type: Number,
       required: false,
      },
      image: {
        type: String,
       required: false,
      },
      count: {
      type: Number,
       required: false,
       default:1
      },
    },
  ],

  
});


const User = mongoose.model("user", UserSchema, "users");
export default User;
