import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminSupport extends Component {

    state = {
        updateStatus: ''
    }
    componentDidMount = () => { 
        this.props.dispatch ({ type: 'GET_TICKETS' })
      };

      updateStatus = () => {
          console.log('in updateStatus');
          this.setState({
            // updateStatus: event.target.value
          })
      }

      archive = () => {
          console.log('archive clicked');
          
      }

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
                                <td>{item.store_name}</td>
                                <td>{item.request_type}</td>
                                <td>{item.request_body}</td>
                                <td>{item.id}</td>
                                <td>{item.request_date}</td>
                                <td>
                                    <select name="updateStatus" default value={item.ticket_status} onChange={this.updateStatus}>
                                        <option value="newRequest">New Request</option>
                                        <option value="inProgress">In Progress</option>
                                        <option value="resolved">Resolved</option>
                                    </select>
                                </td>
                                <td><button onClick={this.archive}>ARCHIVE</button></td>
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