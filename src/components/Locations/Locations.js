import React, { Component } from 'react';
import { connect } from 'react-redux';

class Locations extends Component {
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_LOCATIONS' })
    }
    render(){
        const location = this.props.reduxState.locationsReducer;
        return (
          <div>
            <h1>Locations</h1>
            <table className = 'customerInfo'>
              <thead>
                <tr>
                  <th>Store Name</th>
                  <th>Address</th>
                  <th>Timezone</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Point of Contact</th>
                  <th>Tablets Quantity</th>
                  <th>Printers Quantity</th>
                  <th>Tablet Stands Quantity</th>
                </tr>
              </thead>
              {location.map((item) => (
                <tr key={item.id}>
                  <td>{item.store_name}</td>
                  <td>{item.address}</td>
                  <td>{item.timezone}</td>
                  <td>{item.phone_number}</td>
                  <td>{item.location_email}</td>
                  <td>{item.point_of_contact}</td>
                  <td>{item.tablets_quantity}</td>
                  <td>{item.printers_quantity}</td>
                  <td>{item.tablet_stands_quantity}</td>
                </tr>
              ))}
            </table>
            <input type='text'/>
            <button onClick = {this.submit}>Submit</button>
          </div>
        );
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(Locations);