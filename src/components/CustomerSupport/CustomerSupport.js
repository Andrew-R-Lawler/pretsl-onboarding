import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerSupport extends Component {

    submit = () => {
        console.log('submit clicked');
        
    }

    render() {
        console.log('this.props.reduxStore.user', this.props.reduxStore.user);
        return (
            <div>
                <div>
                    <h1>Customer Support</h1>
                    <h2>Thank you for reaching out.</h2>
                    <p>Copy here about making a support request. Please fill out the form. Someone will respond to the email associated with the account. </p>
                    <p>From Purple Onion: 'We’re here to help make the planning of your event easier. Whether you’ve got questions about placing an order, creating a menu for your event or just need help getting started, we’re here to help. Fill out the form here and someone will be in touch with you soon.'</p>
                </div>
                <form>
                    <div>
                        Name: {this.props.reduxStore.user.username}
                        <br/>
                        Contact Info: {this.props.reduxStore.user.user_email}
                        <p>If there is a better name or contact info to address this request, please specify so in the details section below.</p>
                    </div>
                    <label>Request type:</label>
                    <select>
                        <option value="Change Contact Info">Change Contact Info</option>
                        <option value="Change Payment Information">Change Payment Information</option>
                        <option value="Change Plan">Change Plan</option>
                        <option value="Cancel Pretsl Account">Cancel Pretsl Account</option>
                    </select>
                    <br/>
                    <button onClick={this.submit}>Submit</button>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
  });
  
  export default connect(mapStateToProps)(CustomerSupport);