import { Link, } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCart, removeUser } from "../../../actions";
const Header = () => {
  const user = useSelector((state) => state.userReducer);
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  // console.log("cart is", cart)
  
  const removeUserFromStore = () => {

    dispatch(removeUser());
    dispatch(removeCart());
 
  }

  return (
    <div className="user-header">

<div>
        <ul className="custom-navbar">
          {Object.keys(user).length === 0 ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li className="cart">
                <Link to="/cart">Cart</Link>
                {
                  
                  cart.length===0?null:<div className="cart-number">{cart.length}</div>
                }

                
              </li>
              <li>
                <Link to="" onClick={removeUserFromStore}>
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <h1 className="m-0 ">
          <Link to='/' className="logo" ><span className="text-primary">Figurine</span>Shop</Link>         
        </h1>
      </div>
     
    </div>
  );
};

export default Header;
