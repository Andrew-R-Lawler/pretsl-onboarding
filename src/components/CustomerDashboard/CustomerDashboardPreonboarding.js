import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone'

import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

//views on this page, create a button that navigates to view contract page
//display date joined
//customer email. 

//for email, accesses store email through, clientStoreReducer
//for date joined display date joined from store table, found in clientStoreReducer
//for contract, grab contract from clientStoreReducer
//create button that routes to contract page.

//build in a semantic UI modal into the page that is displayed on the contract
//view button click.

class CustomerDashboardPreonboarding extends Component {

    state = {
        id: this.props.store.id,
        store_name: this.props.store.store_name,
        customer_email: this.props.store.customer_email,
        store_status: this.props.store.store_status,
        date_joined: this.props.store.date_joined,
        notes: this.props.store.notes,
        business_type: this.props.store.business_type,
        contract: this.props.store.contract,
        moonclerk_url: this.props.store.moonclerk_url,
        active_customer: this.props.store.active_customer,
        store_inventory: ''
    }

    viewContractModal(){
        //display modal here, select contract from clientStoreReducer
        console.log("Contract Button Clicked");
    }

    onDrop = (acceptedFiles) => {
        console.log('onDrop:', acceptedFiles);
        const upload = acceptedFiles[0];
        this.setState({
            store_inventory: acceptedFiles
        })
        this.props.dispatch({ 
            type: 'UPDATE_STORE',
            payload: this.state })
    }

    render(){
        return(
            <div>
                <h2 className="store-name">{this.props.store.store_name}</h2>
                <div className="customerPreonboardingDisplay">
                    {/* Render date joined, then email, then render view contract at the bottom of the page */}
                    {/* <div className="dateJoinedDiv">Date: {this.props.reduxState.clientStoreReducer.date_joined} </div> */}
                    <div className="emailDisplayDiv">
                        <h3>Email:</h3>
                         {this.props.store.customer_email}</div>
                    <div className="contractViewButton">
                        <h3>Contract:</h3>
                            <Button
                                type='button'
                                onClick={()=>this.viewContractModal()}
                                >
                                    View Contract
                            </Button>
                
                <h3>Inventory:</h3>
                <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                        <section className="dropzone-style">
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>CLICK HERE, or DRAG AND DROP files to upload your inventory</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                    </div>
                </div>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerDashboardPreonboarding);