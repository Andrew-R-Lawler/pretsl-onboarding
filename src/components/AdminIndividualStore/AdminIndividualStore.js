import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminIndividualStore extends Component {
    render() {
        return (
            <div>
                <h1>Admin's Individual Store View</h1>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(AdminIndividualStore);