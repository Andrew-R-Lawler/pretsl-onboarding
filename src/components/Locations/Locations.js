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
            <table>
              <thead>
                <tr>
                  <th>Store Name</th>
                  <th>Request Type</th>
                  <th>Description</th>
                  <th>Ticket Number</th>
                  <th>Date Requested</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {location.map((item) => (
                <tr key={item.id}>
                  {/* <td>{item.store_id}</td> */}
                  {/* <td>{item.request_type}</td> */}
                  {/* <td>{item.request_body}</td> */}

                  <td>{item.address}</td>
                </tr>
              ))}
            </table>
          </div>
        );
    }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(Locations);