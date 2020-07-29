import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerDashboardPreonboarding from './CustomerDashboardPreonboarding';
import CustomerDashboardPostonboarding from './CustomerDashboardPostonboarding';

//conditionally render, preonboarding and post onboarding dashboard components based off
//boolean value active_customer. active customer will be stored in store reducer, 
//nameing convention is this.props.reduxState.clientStoreReducer

class CustomerDashboard extends Component {
    state={
        store_status: ''
    }

    componentDidMount(){
        this.props.dispatch({ type: 'GET_STORE_CLIENT_DASHBOARD', payload:{user_id: this.props.reduxState.user.id} });
        
    }

    render(){

        return(
            <div className="CustomerDashboardBaseDiv">
                <h1>Customer Dashboard</h1>
                <div className="customerDashboardActiveStatusConditionalRenderDiv">
                    {this.props.reduxState.clientDashboardStoreReducer.map(store =>{
                        if (store.store_status ==='Customer'){
                            return(
                                <CustomerDashboardPostonboarding store = {store}/>
                            )
                        }
                        else{
                            return(
                                <CustomerDashboardPreonboarding store ={store}/>
                            )
                        }
                    })}
                </div>

            </div>
        )
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(CustomerDashboard);