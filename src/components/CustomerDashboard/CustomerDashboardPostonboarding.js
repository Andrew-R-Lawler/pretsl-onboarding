import React, { Component } from 'react';
import { connect } from 'react-redux';

//this is a conditionally rendered component only seen on 
//customerdashboard if customer status is active:
//active_customer===true

//in this view list, point of contact first
//display store name

//then list date joined
//view email
//view contract
//create a button that opens up a modal for view contract

class CustomerDashboardPostonboarding extends Component {

    viewContractModal(){
        //display modal here, select contract from clientStoreReducer
        console.log("Contract Button Clicked");
    }

    render(){
        return(
            <div>
                <h2>Customer Dashboard View Post Onboarding</h2>
                <div className="customerPostonboardingDisplay">
                    <div className="storeNameDisplay">
                        {this.props.reduxState.clientStoreReducer.store_name}
                    </div>
                    <div className="dateJoinedDiv">
                        Date Onboarded: {this.props.reduxState.date_joined}
                    </div>
                    <div className="emailDisplayDiv">
                        Email: {this.props.reduxState.clientStoreReducer.customer_email}
                    </div>
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
                        
                    </div>
                </div>
            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerDashboardPostonboarding);