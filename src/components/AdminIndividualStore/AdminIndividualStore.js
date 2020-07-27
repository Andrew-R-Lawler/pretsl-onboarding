import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminIndividualStore extends Component {

    state = {
        edit: false,
        store_name: '',
        store_status: '',
        date_joined: '',
        notes: '',
        business_type: '',
        contract: '',
        moonclerk_url: '',
        active_customer: '',
    }

    goBack = () => {
        this.props.history.push('/AdminDashboard')
    }

    toggleEdit = () => {
        console.log('in toggleEdit');
        this.setState({
            edit: !this.state.edit,
            store_name: this.props.store.store_name,
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
        console.log('in handleChange');
    }

    render() {
        return (
            <div>
                {console.log('this.state', this.state)}
                <h1>Admin's Individual Store View</h1>
                <button onClick={this.goBack}>Back</button>
                <h3>Store Name</h3>
                {this.state.edit ?
                    <input name='store_name' value={this.props.store.store_name} onChange={this.handleChange}></input>
                :
                    <p>{this.props.store.store_name}</p>
                }
                <h3>Store Status</h3>
                {this.state.edit ?
                    <input name='store_status' value={this.props.store.store_status} onChange={this.handleChange}></input>
                    :
                    <p>{this.props.store.store_status}</p>
                }
                <h3>Date Joined</h3>
                {this.state.edit ?
                    <input name='date_joined' value={this.props.store.date_joined} onChange={this.handleChange}></input>
                    :
                    <p>{this.props.store.date_joined}</p>
                }
                <h3>Notes</h3>
                {this.state.edit ?
                    <textarea name='notes' value={this.props.store.notes} onChange={this.handleChange}></textarea>
                    :
                    <p>{this.props.store.notes}</p>
                }
                <h3>Business Type</h3>
                {this.state.edit ?
                    <input name='business_type' value={this.props.store.business_type} onChange={this.handleChange}></input>
                    :
                    <p>{this.props.store.business_type}</p>
                }
                <h3>Contract</h3>
                <h3>MoonClerk URL</h3>
                {this.state.edit ?
                    <input name='moonclerk_url' value={this.props.store.moonclerk_url} onChange={this.handleChange}></input>
                    :
                    <p>{this.props.store.moonclerk_url}</p>
                }
                <h3>Customer Active?</h3>
                { this.props.store.active_customer === true ?
                <p>True</p>
                :
                <p>False</p>
                }
                <button onClick={this.toggleEdit}>Edit</button>
            </div>
        )
    }
}

const store = reduxState => ({
    store: reduxState.individualStoreReducer
})

export default connect(store)(AdminIndividualStore);