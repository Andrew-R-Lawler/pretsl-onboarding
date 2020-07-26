import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import './App.css';

// REMOVE ?
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

// ADMIN imports
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import AdminIndividualStore from '../AdminIndividualStore/AdminIndividualStore';
import AdminNavigation from '../AdminNavigation/AdminNavigation';
import AdminSupport from '../AdminSupport/AdminSupport';

// CUSTOMER imports
import CustomerDashboard from '../CustomerDashboard/CustomerDashboard';
import CustomerNavigation from '../CustomerNavigation/CustomerNavigation';
import CustomerOnboarding from '../CustomerOnboarding/CustomerOnboarding';
//import CustomerPostOnboarding from '../CustomerPostOnboarding/CustomerPostOnboarding';
import CustomerSupport from '../CustomerSupport/CustomerSupport';



class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
    // console.log('this.props.reduxStore', this.props.reduxStore);
    
  }

  render() {
    console.log('this.props.reduxStore', this.props.reduxStore.user.administrator);
    const isAdmin = this.props.reduxStore.user.administrator
    console.log('isAdmin', isAdmin);
    
    return (
      <Router>
        <div>
          
          {/* Navigation toggles between Admin or Customer view */}
          {isAdmin ? <AdminNavigation/> : <CustomerNavigation/>}

          <Switch>

            <Redirect exact from="/" to="/home" />
            <Route exact path="/about" component={AboutPage}/>
            <ProtectedRoute exact path="/home" component={UserPage}/>
            
        {/* ADMIN ROUTES */}
            <ProtectedRoute exact path="/AdminDashboard" component={AdminDashboard}/>
            <ProtectedRoute exact path="/AdminIndividualStore" component={AdminIndividualStore}/>
            <ProtectedRoute exact path="/AdminSupport" component={AdminSupport}/>

        {/* CUSTOMER ROUTES */}
            <ProtectedRoute exact path="/CustomerDashboard" component={CustomerDashboard}/>
            <ProtectedRoute exact path="/CustomerOnboarding" component={CustomerOnboarding}/>
            {/* <ProtectedRoute exact path="/CustomerPostOnboarding" component={CustomerPostOnboarding}/> */}
            <ProtectedRoute exact path="/CustomerSupport" component={CustomerSupport}/>

        {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />

          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

// export default connect()(App);

// const store = reduxState => ({
//   reduxState
// })

// export default connect(store)(App);

const mapStateToProps = (reduxStore) => ({ reduxStore });
export default connect(mapStateToProps)(App);