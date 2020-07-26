import React, { Component } from 'react';
import { connect } from 'react-redux';


class AdminDashboard extends Component {

    componentDidMount = () => { 
        this.props.dispatch ({ type: 'GET_STORES' })
      };

    render(){
        return(
            <div>
                <h1>Admin Dashboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Store Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Date Joined</th>
                            <th>Notes</th>
                            <th>Contract</th>
                            <th>Business Type</th>
                            <th>Customer Status</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminDashboard);