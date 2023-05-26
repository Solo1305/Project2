import { useDispatch } from "react-redux";
import { removeUser } from "../../actions";
import { FaUserAlt } from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai"
const Header = () => {

  const dispatch = useDispatch();
  return (
    <div className="header fixed-top">

      <div className="d-flex justify-content-between ">

        <div>
          <h2 className="text-light">Admin Panel</h2>
        </div>
        <div className="header-logo">    
        <AiOutlineLogout className="logo-icon"
        onClick={()=>dispatch(removeUser())}
         />

        </div>
   
        
      </div>
      
     
     
    </div>
  );
};

export default Header;
