import {useEffect} from 'react'
import Banner from "./components/Banner"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import { useSelector,useDispatch } from "react-redux"
import Axios from "axios"
import { removeCart } from '../../actions'
const Landing = () => {
const user=useSelector((state)=>state.userReducer);
const dispatch=useDispatch();


dispatch(removeCart());

const getCartItems=async()=>{
  if(Object.keys(user).length!==0){
    try {
      const cart=await Axios.get(`http://localhost:5000/api/cart/getcartitems/${user.username}`);       
      cart.data[0].cart.forEach((item)=>{
        dispatch({type:"SET",payload:item});
      })

      
    } catch (error) {
      console.log(error);
    }
  }
 
}


useEffect(() => {
  getCartItems();
}, [])

  return (
    <>
    <Header/>
    <Banner/>
    <ProductList/>
    
    
    </>
  )
}

export default Landing