import React, { Component } from 'react';
import { connect } from 'react-redux';

import Moment from 'react-moment';

import { Button, Grid} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

//this is a conditionally rendered component only seen on 
//customerdashboard if customer status is active:
//active_customer===true

//in this view list, point of contact first
//display store name

//then list date joined
//view email
//view contract
//create a button that opens up a modal for view contract

//pass the store as a prop from compoent CustomerDashboard

class CustomerDashboardPostonboarding extends Component {

    componentDidMount(){
        console.log("inside CustomerDashboardPostonboarding, this.props.store:", this.props.store)
        }   

    viewContractModal(){
        //display modal here, select contract from clientStoreReducer
        console.log("Contract Button Clicked");
    }


    render(){
        return(
            <div>
                <h2 className="store-name">{this.props.store.store_name}</h2>
                <div className="customerPostonboardingDisplay">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8} className="left-column">
                                <h3>Date Joined</h3>
                                    <div className="dateJoinedDiv">
                                        <Moment format="YYYY/MM/DD">
                                        {this.props.store.date_joined}
                                        </Moment>
                                    </div>
                                <h3>Email</h3>
                                    <div className="emailDisplayDiv">
                                        <p>{this.props.store.customer_email}</p>
                                    </div>
                                <h3>Business Type</h3>
                                    <div className="emailDisplayDiv">
                                        <p>{this.props.store.business_type}</p>
                                    </div>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <h3>MoonClerk URL</h3>
                                    <div className="emailDisplayDiv">
                                        <p>{this.props.store.moonclerk_url}</p>
                                    </div>
                                <div className="contractViewButton">
                                <h3>Contract</h3>
                                    <Button type='button' onClick={()=>this.viewContractModal()}>View Contract</Button>
                                </div>
                                <h3>Active Customer?</h3>
                                <div className="emailDisplayDiv">
                                    <p>{String(this.props.store.active_customer)}</p>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
             </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerDashboardPostonboarding);