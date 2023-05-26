import {combineReducers} from "redux"

import userReducer from "./user"
import cartReducer from "./cart"

const rootReducer = combineReducers({
  cartReducer,
  userReducer,
})

export default rootReducer