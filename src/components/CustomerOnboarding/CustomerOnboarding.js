import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerOnboarding extends Component {
    render() {
        return (
            <div>
                <h1>Customer Onboarding</h1>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerOnboarding);