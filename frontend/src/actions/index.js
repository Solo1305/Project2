export const addToCart=()=>{
  return {
    type: "ADD"
  }

}

export const deleteFromCart=()=>{
  return {
    type: "DELETE"
  }

}

export const addUser=(payload)=>{

  return {
    type:"SET_USER",
    payload:payload
  }


}


export const removeUser=()=>{
  return {
    type:"REMOVE_USER"
  }
}


export const removeCart=()=>{
  return {
    type:"REMOVE_CART"
  }
}