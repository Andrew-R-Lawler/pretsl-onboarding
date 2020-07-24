import React, { Component } from 'react';
import { connect } from 'react-redux';

class Locations extends Component {
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