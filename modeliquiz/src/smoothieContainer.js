import React from 'react'
import redux from 'redux'
import { buySmoothie } from './redux/smoothies/smoothieAction'
import { connect } from 'react-redux'

function SmoothieContainer(props) {
  return (
    <div>
        <h2>
            Numnber of smoothie -  {props.numOfSmoothie}
        </h2>
        <button onClick={props.buySmoothie}>
            Buy Smoothie
        </button>
    </div>
  )
}
const mapStateToProps = state => {
    return { 
        numOfSmoothie: state.numOfSmoothie

    }
}
const mapDispatchToProps = dispatch => {
    return {
        buySmoothie: () => dispatch(buySmoothie())
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)
    (SmoothieContainer)

