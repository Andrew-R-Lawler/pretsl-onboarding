import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Button, Input, TextArea, Form, Modal, Icon, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './AdminIndividualStore.scss';
import Moment from 'react-moment';

class AdminIndividualStore extends Component {

    state = {
        modalOpen: false,
        edit: false,
        user_id: '',
        store_name: '',
        customer_email: '',
        store_status: '',
        date_joined: '',
        notes: '',
        business_type: '',
        contract: '',
        moonclerk_url: '',
        active_customer: '',
        subject: 'Welcome To Pretsl!',
        email_body: `We are happy to welcome you to Pretsl!
        
        Your login credentials are
        Username:
        Password:

        Your contract for signing is attached to this email!
        
        Follow this link to complete payment so we can get you on the way to having goods in customer's hands:`,
    }

    goBack = () => {
        this.props.history.push('/AdminDashboard')
    }

    toggleEdit = () => {
        console.log('in toggleEdit');
        this.setState({
            edit: !this.state.edit,
            id: this.props.store.id,
            user_id: this.props.store.user_id,
            store_name: this.props.store.store_name,
            customer_email: this.props.store.customer_email,
            store_status: this.props.store.store_status,
            date_joined: this.props.store.date_joined,
            notes: this.props.store.notes,
            business_type: this.props.store.business_type,
            contract: this.props.store.contract,
            moonclerk_url: this.props.store.moonclerk_url,
            active_customer: this.props.store.active_customer,
        })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }

    submitChanges = () => {
        this.props.dispatch({ type: 'UPDATE_STORE', payload: this.state })
        this.setState({
            edit: false,
        })
    }

    sendMail = () => {
        let newEmail = {
            customer_email: this.state.customer_email,
            subject: this.state.subject,
            email_body: this.state.email_body,
        }
        this.props.dispatch({ type: 'SEND_EMAIL', payload: newEmail })
        this.handleClose();
    }

    handleOpen = () => {
        this.setState({
            modalOpen: true,
            customer_email: this.props.store.customer_email,
        })
    }

    handleClose = () => this.setState({ modalOpen: false })

    render() {

        return (
            <div>
            <Container className='pageHeader'>
                <Modal
                    trigger={<Button className='emailButton' onClick={this.handleOpen}>Send Mail</Button>}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    size='small'
                >
                    <Header icon='browser' content='Draft an E-mail' />
                    <Modal.Content>
                        {console.log('this.state', this.state)}
                        <Form className='email-modal'>
                            <Form.Field>
                                <Header as='h4'>Subject</Header>
                                <Input name='subject' value={this.state.subject} onChange={this.handleChange} />
                            </Form.Field>
                            <Form.Field>
                                <Header as='h4'>E-mail Body</Header>
                                <Form.TextArea name='email_body' value={this.state.email_body} onChange={this.handleChange} />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.sendMail}>
                            <Icon name='checkmark' />Send Message
                            </Button>
                    </Modal.Actions>
                </Modal>
            </Container>
            <div className="admin-individual-store-container">
                <Grid>
                    <Grid.Column width={6}>
                        <Form.Field>
                            <Header as='h3'>Store Name</Header>
                                {this.state.edit ?
                                    <Input name='store_name' value={this.state.store_name} onChange={this.handleChange}></Input>
                                :
                                    <p>{this.props.store.store_name}</p>
                                }
                        </Form.Field>
                        <Form.Field>
                            <Header as='h3'>Store Status</Header>
                            {this.state.edit ?
                                <select name='store_status' value={this.state.store_status} onChange={this.handleChange}>
                                    <option value = 'Lead'>Lead</option>
                                    <option value = 'Prospect'>Prospect</option>
                                    <option value = 'Opportunity'>Opportunity</option>
                                    <option value = 'Customer'>Customer</option>
                                    <option value = 'Past Customer'>Past Customer</option>
                                    <option value = 'Junk Opportunity'>Junk Opportunity</option>
                                    <option value = 'Junk Prospect'>Junk Prospect</option>
                                </select>
                            :
                                <p>{this.props.store.store_status}</p>
                            }
                        <Form.Field>
                            <Header as='h3'>User ID</Header>
                            {this.state.edit ?
                                <select name='user_id' value={this.state.user_id} onChange={this.handleChange}>
                                    {this.props.userlist.map(user => {
                                        return(<option key = {user.id} value = {user.id}>{user.username}</option>)
                                    })}
                                </select>
                            :
                                <p>{this.props.store.user_id}</p>
                            }
                        </Form.Field>
                    </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Form.Field>
                            <Header as='h3'>Customer Email</Header>
                            {this.state.edit ?
                                <Input name='customer_email' value={this.state.customer_email} onChange={this.handleChange}></Input>
                            :
                                <p>{this.props.store.customer_email}</p>
                            }
                        </Form.Field>
                        <Form.Field>  
                            <Header as='h3'>Date Joined</Header>
                            {this.state.edit ?
                                <Input name='date_joined' value={this.state.date_joined} onChange={this.handleChange}></Input>
                            :
                                <Moment format="YYYY/MM/DD">{this.props.store.date_joined}</Moment>
                            }
                        </Form.Field>
                        <Form.Field>
                            <Header as='h3'>Business Type</Header>
                            {this.state.edit ?
                                <select name='business_type' value={this.state.business_type} onChange={this.handleChange}>
                                    <option valiue = 'Ag Co-op'>Ag Co-op</option>
                                    <option value = 'Food Co-op'>Food Co-op</option>
                                    <option value = 'Meat Market'>Meat Market</option>
                                    <option value = 'Ethnic Grocer'>Ethnic Grocer</option>
                                    <option value = 'Organic/Health Foods'>Organic/Health Foods</option>
                                    <option value = 'Caterer'>Caterer</option>
                                </select>
                                :
                                <p>{this.props.store.business_type}</p>
                            }
                        </Form.Field>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Header as='h3'>Contract</Header>
                    <h3>MoonClerk URL</h3>
                    {this.state.edit ?
                        <Input name='moonclerk_url' value={this.state.moonclerk_url} onChange={this.handleChange}></Input>
                        :
                        <p>{this.props.store.moonclerk_url}</p>
                    }
                    <Header as='h3'>Customer Active?</Header>
                    {this.state.edit ?
                        <select name='active_customer' value={this.state.active_customer} onChange={this.handleChange}>
                            <option value = {true}>True</option>
                            <option value = {false}>False</option>
                        </select>
                        :
                        <p>{String(this.props.store.active_customer)}</p>
                    }
                    </Grid.Column>
                    <Grid.Row>
                    <div className="notes">
                        <Form.Field>
                            <Header as='h3'>Notes</Header>
                                {this.state.edit ?
                                    <TextArea name='notes' value={this.state.notes} onChange={this.handleChange}></TextArea>
                                :
                                    <p>{this.props.store.notes}</p>
                                }
                        </Form.Field>
                    </div>
                    </Grid.Row>
                </Grid>
                <div className="buttons">
                    <Button className='back' onClick={this.goBack}>Back</Button>
                    {this.state.edit ?
                    <Button onClick={this.submitChanges}>Submit</Button>
                    :
                    <Button onClick={this.toggleEdit}>Edit</Button>
                    }
                </div>
            </div>
            </div>
        )
    }
}

const store = reduxState => ({
    store: reduxState.individualStoreReducer,
    userlist: reduxState.adminUserReducer
})

export default connect(store)(AdminIndividualStore);