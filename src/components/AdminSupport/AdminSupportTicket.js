import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './AdminSupport.css';

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
            <Table.Row key={this.props.item.id}>
                <Table.Cell>{this.props.item.store_name}</Table.Cell>
                <Table.Cell>{this.props.item.customer_email}</Table.Cell>
                <Table.Cell>{this.props.item.request_type}</Table.Cell>
                <Table.Cell>{this.props.item.request_body}</Table.Cell>
                <Table.Cell>{this.props.item.id}</Table.Cell> 
                <Table.Cell>
                    <Moment format="YYYY/MM/DD">
                        {this.props.item.request_date}
                    </Moment>
                </Table.Cell>
                <Table.Cell>
                    <select name="updateStatus" value = {this.props.item.ticket_status} onChange={this.updateStatus}>
                        <option value="New Request">New Request</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                    </select>
                </Table.Cell>
                <Table.Cell><button value={this.props.item.id} onClick={this.archive}>ARCHIVE</button></Table.Cell>
            </Table.Row>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminSupportTicket);