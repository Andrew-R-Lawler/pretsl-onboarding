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
                <div>
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
                        <tbody>
                            {this.props.reduxState.storeReducer.map(store => {
                                return(
                                    <tr>
                                        <td><button>View Profile</button></td>
                                        <td>{store.store_name}</td>
                                        <td>{store.customer_email}</td>
                                        <td>{store.store_status}</td>
                                        <td>{store.date_joined}</td>
                                        <td>{store.notes}</td>
                                        <td>{store.contract}</td>
                                        <td>{store.business_type}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminDashboard);