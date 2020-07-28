import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminSupportTicket extends Component {

    state = {
        ticket_status: '',
        updateStatus: '',
        ticketId: '',
    }

    componentDidMount(){
        this.setState({
            ticket_status: this.props.item.ticket_status,
        })
    }

    updateStatus = (event) => {
        this.setState({
            updateStatus: event.target.value
        })
    }

    render(){
        return(
            <tr key={this.props.item.id}>
                {console.log('this.state', this.state)}
                <td>{this.props.item.store_name}</td>
                <td>{this.props.item.request_type}</td>
                <td>{this.props.item.request_body}</td>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.request_date}</td>
                <td>
                    <select name="updateStatus" selected={this.state.ticket_status} onChange={this.updateStatus}>
                        <option value="New Request">New Request</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </td>
                <td><button onClick={this.archive}>ARCHIVE</button></td>
            </tr>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminSupportTicket);