import {MdDelete} from 'react-icons/md'
import Axios from 'axios'
import { useEffect, useState } from 'react'
const Main = () => {

  const [users, setUsers] = useState([]);

  
  const getUsers = async () => {
    const res = await Axios.get('http://localhost:5000/api/user/getusers')
   setUsers(res.data.data)
   console.log("users", users)
  }


  const deleteUser = async (id) => {
    await Axios.delete(`http://localhost:5000/api/user/deleteuser/${id}`)
    getUsers();
  }
  console.log("users", users)

  useEffect(() => {
    getUsers();
  }, [])






  return (
    <div className='container-fluid'>
    <div className="users">

     


      <h1>ALL USERS</h1>

      {
        (users.length > 0) ? users.map((user,index) => {
            return (
              <div key={index} className="sigle-user">
                <div className="row">
                  <div className="col-md-3 col-lg-2">
                    <p>{user.email}</p>
                  </div>
                  <div className="col-md-3 col-lg-2">
                    <p>{user.username}</p>
                  </div>

                  <div className="col-md-6 col-lg-8 text-end">
                    <MdDelete className='del-icon' onClick={()=> deleteUser(user._id) } />
                  </div>
                </div>
                
              </div>
            )
          }) : <h1>No Users</h1>

        }
      
 
    </div>
    
    </div>
  )
}

export default Main