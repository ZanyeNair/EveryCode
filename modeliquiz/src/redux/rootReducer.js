import { combineReducers } from "@reduxjs/toolkit";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./icecream/icecreamReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream: iceCreamReducer
})

export default rootReducer