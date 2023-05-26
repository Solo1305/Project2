import { useLocation } from "react-router-dom";
import Banner from "./components/Banner";
import Header from "./components/Header";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import Axios from "axios";
const ProducDetail = () => {
  const [count, setCount] = useState(1);  
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer);
  // const cart = useSelector((state) => state.cartReducer);

  const { state } = useLocation();
  const product = state.product;
const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const handleIncrement = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  }

  const addToCart = async() => {

    if(Object.keys(user).length===0){
      alert("Please login to continue");
      return;
    }
    try {

      const cart = await Axios.post("http://localhost:5000/api/cart/addproduct",{product,count,user},);
      // console.log("cart",cart.data);

      if(cart.data==="Item added to cart"){
        alert("Item added to cart");
        product.count=count;
       dispatch({type:"SET",payload:product});

      }else{
        alert("Item already in cart");
      }


      
    } catch (error) {
      console.log(error);
      
    }

  }

  return (
    <>
      <Header />

      <Banner />

      <div className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <img src={product.image} alt="" className="img-fluid" />
          </div>

          <div className="col-md-8">
            <h3>{product.title}</h3>

            <p>{product.desc}</p>

            <p>
               
              <b>Price: {product.price} TND </b>
            </p>

            <div className="d-flex mt-5 align-items-center">
              <button className="btn btn-primary" onClick={handleDecrement}>-</button>
               <p className="m-0 fw-bold mx-2">{count}</p>
              <button className="btn btn-primary"onClick={handleIncrement} >+</button>
            </div>

            <div className="mt-5">
              <button  className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProducDetail;
