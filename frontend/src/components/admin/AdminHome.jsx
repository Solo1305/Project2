import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { NavLink } from 'react-router-dom'

const AdminHome = () => {
  return (
    <>
        <Header/>
     
     <div className="admin-home container-fluid p-0">
      <div className="row">
        <div className="col-md-3 col-lg-2 p-0">

          <div className="side-bar">

          <ul>
            <li>
              <NavLink to="/">Users</NavLink>
            </li>

            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>

          </div>
       
        </div> 
        <div className="col-md-9 col-lg-10 p-0 ">
          <Outlet/>
        </div>
      </div>

     </div>
     
      
    </>
  
  )
}

export default AdminHome