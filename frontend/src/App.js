import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useSelector } from "react-redux";
import Home from "./components/user/Home";
import AdminHome from "./components/admin/AdminHome";
import Main from "./components/admin/pages/Main";
import Product from "./components/admin/pages/Product";
import Landing from "./components/user/Landing";
import ProducDetail from "./components/user/ProducDetail";
import Cart from "./components/user/Cart";

const App = () => {
  
  const user = useSelector((state) => state.userReducer);
  console.log("user", user);

  return (
    <Routes>
      <Route
        path="/"
        element={
          user._id ? (
            user.accountType === "admin" ? (
              <AdminHome />
            ) : (
              <Landing />
            )
          ) : (
            <Landing />
          )
        }
      >
        user.accountType==="admin" && (
        <Route index element={<Main />} />
        <Route path="/products" element={<Product />} />)
      </Route>

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product-details" element={<ProducDetail />} />
      <Route path="/cart" element={user._id ? <Cart /> : <Landing />}/>
    </Routes>
  );
};

export default App;
