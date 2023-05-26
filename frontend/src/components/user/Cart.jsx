import Header from "../user/components/Header"
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios";
import { useEffect,useState } from "react";
 
const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
 

  const user=useSelector((state)=>state.userReducer);

  const removeFromCart=async(item)=>{       
    const id = item._id;
    try {
      const dbcart=await Axios.patch(`http://localhost:5000/api/cart/removefromcart/${user.username}/${id}`);
      if(dbcart.data==="Item removed from cart"){
        alert("item is removed")
        dispatch({type:"DELETE",payload:item});
        
      }      
    } catch (error) {      
      console.log(error);
    }
  }

  
  
  return (
    <>
      <Header />

      <div className="container my-5">
        {
          (cart.length > 0)? cart.map((item,index)=>{
            return(
              <div key={index} className="custom-card mt-4">
              <div className="row">
                <div className="col-md-3">
                  <img src={item.image} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <p className="price"><b> {item.price} $</b></p>              
                  
                  <p> <b>Count : {item.count} </b></p>
    
                </div>
                <div className="col-md-3 d-flex justify-content-end ">
                  <button className="btn btn-primary mt-auto" onClick={()=>removeFromCart(item)} >Remove</button>
                </div>
    
                
                
              </div>
    
              
            </div>
            )
          }) :<h1 className="text-center">Cart is empty</h1>
        }

  


      </div>


    
    </>
  )
}

export default Cart