import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerOnboarding extends Component {
    render() {
        return (
            <div>
                <h1>Customer Onboarding</h1>
                <h3>Store Name</h3>
                <input placeholder = 'Store Name'></input>
                <h3>Store Status</h3>
                <input placeholder = 'Store Status'></input>
                <h3>Date Joined</h3>
                <input placeholder = 'Date Joined'></input>
                <h3>Notes</h3>
                <textarea placeholder = 'Notes'></textarea>
                <h3>Contract</h3>
                <h3>Business Type</h3>
                <input placholder = 'Business Type'></input>
                <h3>MoonClerk URL</h3>
                <input placeholder = 'MoonClerk URL'></input>
                <h3>Customer Email</h3>
                <input placeholder = 'Customer Email'></input>
                <button>Submit</button>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerOnboarding);