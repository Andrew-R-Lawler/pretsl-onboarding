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
            id: this.props.store.id,
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

    render() {
        return (
            <div>
                {console.log('this.state', this.state)}
                <h1>Admin's Individual Store View</h1>
                <button onClick={this.goBack}>Back</button>
                <h3>Store Name</h3>
                {this.state.edit ?
                    <input name='store_name' value={this.state.store_name} onChange={this.handleChange}></input>
                :
                    <p>{this.props.store.store_name}</p>
                }
                <h3>Store Status</h3>
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
                <h3>Date Joined</h3>
                {this.state.edit ?
                    <input name='date_joined' value={this.state.date_joined} onChange={this.handleChange}></input>
                    :
                    <p>{this.props.store.date_joined}</p>
                }
                <h3>Notes</h3>
                {this.state.edit ?
                    <textarea name='notes' value={this.state.notes} onChange={this.handleChange}></textarea>
                    :
                    <p>{this.props.store.notes}</p>
                }
                <h3>Business Type</h3>
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
                <h3>Contract</h3>
                <h3>MoonClerk URL</h3>
                {this.state.edit ?
                    <input name='moonclerk_url' value={this.state.moonclerk_url} onChange={this.handleChange}></input>
                    :
                    <p>{this.props.store.moonclerk_url}</p>
                }
                <h3>Customer Active?</h3>
                {this.state.edit ?
                    <select name='active_customer' value={this.state.active_customer} onChange={this.handleChange}>
                        <option value = {true}>True</option>
                        <option value = {false}>False</option>
                    </select>
                    :
                    <p>{String(this.props.store.active_customer)}</p>
                }
                {this.state.edit ?
                <button onClick={this.submitChanges}>Submit</button>
                :
                <button onClick={this.toggleEdit}>Edit</button>
                }
            </div>
        )
    }
}

const store = reduxState => ({
    store: reduxState.individualStoreReducer
})

export default connect(store)(AdminIndividualStore);