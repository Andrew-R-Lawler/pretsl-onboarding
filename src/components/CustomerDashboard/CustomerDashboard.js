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
        this.props.dispatch({ type: 'GET_LOCATIONS' })

    //     const {store_status: store_statusVar} = this.props.reduxState.locationsReducer[0];

    //     this.setState({
    //         store_status: store_statusVar
    //     })
    // }

    // componentDidUpdate(prevProps, prevState){
    //     console.log("inside componentDidUpdate in Customer Dashboar, this.props.reduxState.locationReducer", this.props.reduxState.locationReducer);
        
    }

    render(){
        //const  loactionsReducerDataObject = this.props.reduxState.locationsReducer[0];
        return(
            <div className="CustomerDashboardBaseDiv">
                <h1>Customer Dashboard</h1>
                <div className="customerDashboardActiveStatusConditionalRenderDiv">
                    {/* {this.props.reduxState.locationsReducer.store_status==="Customer" ? <CustomerDashboardPostonboarding/>:<CustomerDashboardPreonboarding/>} */}

                    {/* {JSON.stringify(loactionsReducerDataObject.store_status)} */}
                    {/* {JSON.stringify(this.state.store_status)} */}
                    {this.props.reduxState.locationsReducer.map(store =>{
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