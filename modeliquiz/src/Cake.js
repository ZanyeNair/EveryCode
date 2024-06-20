const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE '

{
    type: BUY_CAKE
    info: 'First redux action'

} // making an action object with a type propertu

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}//action creator returns an action

//needs two different states to write a reducer function
const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{ 
            ...state, //creates an copy of the object with all its properties
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = create