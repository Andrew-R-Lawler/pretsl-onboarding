import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSupportTicket from './AdminSupportTicket';

class AdminSupport extends Component {

    componentDidMount = () => { 
        this.props.dispatch({ type: 'GET_TICKETS' })
    };

    render(){
        const supportTicket = this.props.reduxStore.supportReducer;
        console.log('supportTicket', supportTicket);
        return(
            <div>
                <h1>Admin Support Tickets</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Store Name</th>
                            <th>Store Email</th>
                            <th>Request Type</th>
                            <th>Description</th>
                            <th>Ticket Number</th>
                            <th>Date Requested</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                        { supportTicket.map(item => 
                            <AdminSupportTicket item={item} />)}
                </table>
        </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(AdminSupport);