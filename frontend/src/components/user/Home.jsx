import React from 'react'
import {useDispatch} from 'react-redux'
import {removeUser} from '../../actions'
const Home = () => {

    const dispatch=useDispatch();
  return (
    < >

    <button className='btn btn-primary' 
    onClick={()=>dispatch(removeUser())}
     >logout</button>
    
    
    </>
  )
}

export default Home