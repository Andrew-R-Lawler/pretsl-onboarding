import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerPostOnboarding extends Component {
    render(){
        return(
            <div>
                <h1>Customer Post-Onboarding</h1>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerPostOnboarding);