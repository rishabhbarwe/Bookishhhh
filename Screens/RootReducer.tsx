import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from './BookSlice'
const RootReducer = combineReducers({
    books : bookReducer,

})
export default RootReducer;