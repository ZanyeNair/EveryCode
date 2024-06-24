import { BUY_SMOOTHIE } from './smoothieTypes'

const initialState = {
    numOfSmoothie: 10
}

const smoothieReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_SMOOTHIE: return {
            ...state,
            numOfSmoothie: state.numOfSmoothie - 1
        }
        default: return state
    }
}

export default smoothieReducer
