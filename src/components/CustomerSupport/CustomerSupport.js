import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerSupport extends Component {
    render() {
        return (
            <div>
                <h1>Customer Support</h1>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerSupport);