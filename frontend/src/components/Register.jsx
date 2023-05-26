import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    username: "",
    password: "",
    email: "",
  });


  const [error, setError] = useState(false);
  const changeHandler = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  
   

  const loginSubmit = async(e) => {
    e.preventDefault();
    setError(false);

    try {      
      const response = await Axios.post(
        "http://localhost:5000/api/user/register",
        regData
      );
      if(response.data==="User created"){
        navigate("/");
      }

     console.log(response);
    } catch (error) {
      console.log(error);
      if(error.response.data==="taken"){
        setError(true);
      }
    }
     
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto">
          <div className="login-card">
            <h1 className="heading-one">Register</h1>

            <form className="mt-5" onSubmit={loginSubmit}>
              <div className="field-container">
                <label htmlFor="username">
                  Username <span>*</span>
                </label>
                <input
                  type="text"
                  required
                  className="custom-field"
                  id="username"
                  placeholder="Username"
                  name="username"
                  value={regData.username}
                  onChange={changeHandler}
                />
              </div>

              <div className="field-container mt-2">
                <label htmlFor="email">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  className="custom-field"
                  id="email"
                  required
                  placeholder="Email"
                  name="email"
                  value={regData.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="field-container mt-2">
                <label htmlFor="password">
                  Password <span>*</span>
                </label>
                <input
                  type="password"
                  className="custom-field"
                  id="password"
                  placeholder="Password"
                  name="password"
                  required
                  value={regData.password}
                  onChange={changeHandler}
                />
              </div>

              {error && (
                <div className="error">
                  <p>Username is taken already</p>
                </div>
              )}

              <button className="submit-btn">Register</button>
            </form>

            <p className="login-para">
              Already have an account! <Link to="/">Login</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
