import React, { Component } from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from './redux/action'
class Counter extends Component {
    handleDecrement = () => {
        this.props.decrement(5)
    }
    handleIncrement = () => {
        this.props.increment(10) 
    }
    render() {
        return (
            <div>
                <div onClick={()=>this.handleIncrement()}> Increment Counter + </div>
                <div onClick={()=>this.handleDecrement()}> Decrement Counter - </div>
                <div>Counter Value {this.props.counter}</div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    counter:state.counter
})

const mapDispatchToProps = (dispatch) => ({
    increment: (value) => {
        dispatch(increment(value))
      },
    decrement: (value) => {
        dispatch(decrement(value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
