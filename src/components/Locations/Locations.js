import React, { Component } from 'react';
import { connect } from 'react-redux';

class Locations extends Component {
    customerLocation = () => {
        event.preventDefault();
        this.props.dispatch({ type: 'GET_LOCATIONS' })
    }
    render(){
        return(
            <div>
                <h1>Locations</h1>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(Locations);