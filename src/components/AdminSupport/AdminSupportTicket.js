import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';

class AdminSupportTicket extends Component {

    state = {
        ticket_status: '',
        updateStatus: '',
        ticketId: '',
        isArchived: ''
    }

    componentDidMount(){
        this.setState({
            ticket_status: this.props.item.ticket_status,
            ticketId: this.props.item.id,
            isArchived: this.props.item.isarchived,
        })
    }

    updateStatus = (event) => {
        this.setState({
            updateStatus: event.target.value
        })
        setTimeout(() => {
            this.props.dispatch({
                type: 'UPDATE_TICKET_STATUS',
                payload: this.state,
            })
        }, 1000);
    }

    archive = () => {
        this.setState({
            isArchived: !this.props.item.isarchived
        })
        setTimeout(() => {
            this.props.dispatch({
                type: 'UPDATE_TICKET_STATUS',
                payload: this.state,
            })
        }, 500);
    }

    render(){
        return(
            <tr key={this.props.item.id}>
                <td>{this.props.item.store_name}</td>
                <td>{this.props.item.customer_email}</td>
                <td>{this.props.item.request_type}</td>
                <td>{this.props.item.request_body}</td>
                <td>{this.props.item.id}</td> 
                <td>
                    <Moment format="YYYY/MM/DD">
                        {this.props.item.request_date}
                    </Moment>
                </td>
                <td>
                    <select name="updateStatus" value = {this.props.item.ticket_status} onChange={this.updateStatus}>
                        <option value="New Request">New Request</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </td>
                <td><button value = {this.props.item.id} onClick={this.archive}>ARCHIVE</button></td>
            </tr>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminSupportTicket);