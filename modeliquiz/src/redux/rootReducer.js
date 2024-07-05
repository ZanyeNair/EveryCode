import { combineReducers } from "@reduxjs/toolkit";
import cakeReducer from "./cakes/cakeReducer";

import smoothieReducer from "./smoothies/smoothieReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    smoothie: smoothieReducer
})

export default rootReducer