import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerDashboard extends Component {

    componentDidMount(){
        this.props.dispatch({ type: 'GET_LOCATIONS' })
    }

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