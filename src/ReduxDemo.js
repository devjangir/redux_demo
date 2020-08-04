import React, { Component } from 'react'
import {connect} from 'react-redux';

class ReduxDemo extends Component {
    render() {
        return (
            <div>
                Counter {this.props.counter}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter
})

export default connect(mapStateToProps)(ReduxDemo);
