import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminDashboard extends Component {
    render(){
        return(
            <div>
                <h1>Admin Dashboard</h1>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminDashboard);