import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerSupport extends Component {
    state = {
        supportTicket: ''
    }
    supportTicket = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'CREATE_NEW_TICKET', payload: this.state.supportTicket })
    }
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