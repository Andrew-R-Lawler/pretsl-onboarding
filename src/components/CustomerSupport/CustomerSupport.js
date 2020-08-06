import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CustomerSupport.scss'
import { Button, Form, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class CustomerSupport extends Component {

    state = {
        storeId: '',
        requestType: '',
        requestBody: '',
        requestStatus: 'New Request',
        // modalOpen: false
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_LOCATIONS' })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            storeId: this.props.reduxStore.locationsReducer[0].store_id,
        })
    }

    submit = () => {
        let supportEmail = {
            customer_email: 'Andrew.R.Lawler@gmail.com',
            subject: 'New Support Ticket!',
            email_body: 'An account has submitted a new support ticket! More information can be viewed on the admin support page!'
        }
        this.props.dispatch({
            type: 'CREATE_NEW_TICKET',
            payload: this.state
        })
        this.props.dispatch({ type: 'SEND_EMAIL', payload: supportEmail})
        this.setState({
            storeId: '',
            requestType: '',
            requestBody: '',
            requestStatus: 'New Request',
        })
        
    }

    render() {
        return (
            <div className="customer-support-container">
                <div>
                    {/* {console.log('this.state', this.state, this.props.reduxStore.locationsReducer)} */}
                    
                </div>
                <Form>
                    <div className="customer-support-instructions">
                    <h1 className="customer-support-h1">Customer Support</h1>
                        <h2>Thank you for reaching out!</h2>
                            <p>Let us know how we can make your business.pretsl.com experience even better. Whether you’d like to change payment or contact information, update your subscriptions or plan, or cancel your Pretsl account, we’re here to help. Fill out the form here and someone will be in touch with you soon.</p>
                        <h3>Name: {this.props.reduxStore.user.username}
                        <br/>
                        Contact Info: {this.props.reduxStore.user.user_email}</h3>
                        <p><em>* If there is a better name or contact info to address this request, please specify so in the details section to the right.</em></p>
                    </div>
                    <div className="customer-support-inputs">
                        <label>Request type:</label>
                        <select name="requestType" value = {this.state.requestStatus} onChange={this.handleChange}>
                            <option value="" disabled selected value>Choose</option>
                            <option value="Change Contact Info">Change Contact Info</option>
                            <option value="Change Payment Information">Change Payment Information</option>
                            <option value="Change Plan">Change Plan</option>
                            <option value="Cancel Pretsl Account">Cancel Pretsl Account</option>
                        </select>
                        <br/>
                        <textarea name="requestBody" value = {this.state.requestBody} placeholder="How can we help you?" onChange={this.handleChange}></textarea>
                        <br/>
                        <br/>
                        <Modal
                            trigger={ <Button color='red' onClick={this.submit}>Submit</Button> }
                            header='Thank you for reaching out!'
                            content='Someone from Pretsl Digital will connect with you shortly.'
                            actions={[{ 
                                key: 'done', 
                                content: 'OK', 
                                positive: true,
                             }]}
                            />
                    </div>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
  });
  
  export default connect(mapStateToProps)(CustomerSupport);