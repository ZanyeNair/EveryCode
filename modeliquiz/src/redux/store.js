import { configureStore } from '@reduxjs/toolkit'
import {createStore} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import rootReducer from './rootReducer'


const store = createStore(cakeReducer)

export default store