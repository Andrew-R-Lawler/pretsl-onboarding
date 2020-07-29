import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Divider } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


class AdminDashboard extends Component {

    componentDidMount = () => { 
        this.props.dispatch ({ type: 'GET_STORES' })
      };

    viewStore = (event) => {
        const storeId = event.target.value
        this.props.dispatch({ type: 'GET_INDIVIDUAL_STORE', payload: storeId });
        this.props.history.push('/AdminIndividualStore');
    }

    render(){
        return(
            <div>
                <h1>Admin Dashboard</h1>
                <Divider />
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
                                    <tr key={store.id}>
                                        <td><button value={store.id} onClick={this.viewStore}>View Profile</button></td>
                                        <td>{store.store_name}</td>
                                        <td>{store.customer_email}</td>
                                        <td>{store.store_status}</td>
                                        <td><Moment format="YYYY/MM/DD">{store.date_joined}</Moment></td>
                                        <td>{store.notes}</td>
                                        <td>{store.contract}</td>
                                        <td>{store.business_type}</td>
                                        {store.active_customer === true ?
                                            <td>True</td>
                                            :
                                            <td>False</td>
                                        }
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