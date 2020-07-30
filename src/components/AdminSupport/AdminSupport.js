import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSupportTicket from './AdminSupportTicket';
import { Table, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './AdminSupport.css';


class AdminSupport extends Component {

    componentDidMount = () => { 
        this.props.dispatch({ type: 'GET_TICKETS' })
    };

    render(){
        const supportTicket = this.props.reduxStore.supportReducer;
        console.log('supportTicket', supportTicket);
        return(
            <div>
                
                <Table className='adminSupport'>
                    <Table.Header>
                        <Header className='adminSupportHead' as='h1'>Admin Support Tickets</Header>
                        <Table.Row>
                            <Table.HeaderCell>Store Name</Table.HeaderCell>
                            <Table.HeaderCell>Store Email</Table.HeaderCell>
                            <Table.HeaderCell>Request Type</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Ticket Number</Table.HeaderCell>
                            <Table.HeaderCell>Date Requested</Table.HeaderCell>
                            <Table.HeaderCell width={2}>Status</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                        { supportTicket.map(item => 
                            <AdminSupportTicket item={item} />)}
                </Table>
        </div>
        )
    }
}

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(AdminSupport);