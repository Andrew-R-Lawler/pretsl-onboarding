import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminSupport extends Component {
    render(){
        return(
            <div>
                <h1>Support Tickets</h1>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminSupport);