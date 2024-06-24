import React from 'react'
import redux from 'redux'
import { buyIcecream } from './redux/icecream/icecreamActions'
import { connect } from 'react-redux'

function IceContainer(props) {
  return (
    <div>
        <h2>
            Numnber of icecream -  {props.numOficecream}
        </h2>
        <button onClick={props.buyIcecream}>
            Buy Icecream
        </button>
    </div>
  )
}
const mapStateToProps = state => {
    return { 
        numOficecream: state.numOficecream

    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps)
    (IceContainer)

