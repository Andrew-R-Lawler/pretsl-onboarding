import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone'

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

    viewContractModal(){
        //display modal here, select contract from clientStoreReducer
        console.log("Contract Button Clicked");
    }

    onDrop = (acceptedFiles) => {
        console.log('onDrop', acceptedFiles);
        this.props.dispatch({ 
            type: 'SET_INVENTORY',
            payload: acceptedFiles })
    }

    render(){
        return(
            <div>
                <h2>{this.props.store.store_name}</h2>
                <div className="customerPreonboardingDisplay">
                    {/* Render date joined, then email, then render view contract at the bottom of the page */}
                    {/* <div className="dateJoinedDiv">Date: {this.props.reduxState.clientStoreReducer.date_joined} </div> */}
                    <div className="emailDisplayDiv">Email: {this.props.store.customer_email}</div>
                    <div className="contractViewButton">
                        <label htmlFor="contractViewButton">
                            Contract: 
                            <button
                                type='button'
                                onClick={()=>this.viewContractModal()}
                                >
                                    View Contract
                                </button>
                        </label>
                
                <h2>DROP FILE BELOW</h2>
                <Dropzone onDrop={this.onDrop}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop some files here, or click to select files</p>
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