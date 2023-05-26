
const initialState = [];



const cartReducer = (state = initialState, action) => {
  console.log("action", action.payload);
switch (action.type) {    
    case "SET":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((item) => item._id !== action.payload._id);
    case "REMOVE_CART":
      return [];
    default:
      return state;

}

}

export default cartReducer;