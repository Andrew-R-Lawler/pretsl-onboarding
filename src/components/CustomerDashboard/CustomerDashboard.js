import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerDashboard extends Component {
    render(){
        return(
            <div>
                <h1>Customer Dashboard</h1>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerDashboard);