import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminSupport extends Component {
    componentDidMount = () => { 
        this.props.dispatch ({ type: 'GET_TICKETS' })
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
                            <th>Request Type</th>
                            <th>Description</th>
                            <th>Ticket Number</th>
                            <th>Date Requested</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                        { supportTicket.map(item => 
                            <tr key={item.id}>
                                <td>{item.store_id}</td>
                                <td>{item.request_type}</td>
                                <td>{item.request_body}</td>

                                <td>{item.ticket_status}</td>
                            </tr>) }
                </table>
        </div>
        )
    }
}

// const store = reduxState => ({
//     reduxState
// })

// export default connect(store)(AdminSupport);

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(AdminSupport);