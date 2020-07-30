import React, { Component } from 'react';
import { connect } from 'react-redux';

class Locations extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: "GET_LOCATIONS" });
  };

    state = {
      store_id: "",
      storeName: "",
      address: "",
      timezone: "",
      phoneNumber: "",
      email: "",
      pointOfContact: "",
      tablets_quantity: "",
      printers_quantity: "",
      tablet_stands_quantity: "",
      mode: "view",
    };

  constructor(props) {
    super(props);
    // this.state = {
    //   storeName: "",
    //   address: "",
    //   timezone: "",
    //   phoneNumber: "",
    //   email: "",
    //   pointOfContact: "",
    //   tablets_quantity: "",
    //   printers_quantity: "",
    //   tablet_stands_quantity: "",
    //   mode: "view",
    // };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      store_id: this.props.reduxState.locationsReducer[0].store_id,
      [propertyName]: event.target.value,
    });
  };

  handleSave() {
    this.setState({ mode: "view" });
    this.props.dispatch({
      type: "POST_LOCATION",
      payload: this.state
    });
  }

  handleEdit() {
    this.setState({ mode: "edit" });
  }


  render() {
    const location = this.props.reduxState.locationsReducer;
    const view = this.state.mode === "view";
    return (
      <div>
        {console.log(this.state)}
        <h1>Locations</h1>
        <table className="customerInfo">
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
          {location &&
            location.map((item) => (
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
        Add Location:
        {view ? null : (
          <p>
            <div>
              <label htmlFor="storeName">
                <b>Store Name: </b>
              </label>
              <input
                type="text"
                name="storeName"
                onChange={this.handleInputChangeFor("storeName")}
                value={this.state.storeName}
              />
            </div>
            <div>
              <label htmlFor="address">
                <b>Address: </b>
              </label>
              <input
                name="address"
                onChange={this.handleInputChangeFor("address")}
                value={this.state.address}
              />
            </div>
            <div>
              <label htmlFor="timezone">
                <b>Timezone: </b>
              </label>
              <input
                name="timezone"
                onChange={this.handleInputChangeFor("timezone")}
                value={this.state.timezone}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">
                <b>Phone Number: </b>
              </label>
              <input
                name="phoneNumber"
                onChange={this.handleInputChangeFor("phoneNumber")}
                value={this.state.phoneNumber}
              />
            </div>
            <div>
              <label htmlFor="email">
                <b>Email Address: </b>
              </label>
              <input
                name="email"
                onChange={this.handleInputChangeFor("email")}
                value={this.state.email}
              />
            </div>
            <div>
              <label htmlFor="pointOfContact">
                <b>Point of Contact: </b>
              </label>
              <input
                name="pointOfContact"
                onChange={this.handleInputChangeFor("pointOfContact")}
                value={this.state.pointOfContact}
              />
            </div>
            <div>
              <label htmlFor="tablets_quantity">
                <b>Tablets Quantity: </b>
              </label>
              <input
                name="tablets_quantity"
                onChange={this.handleInputChangeFor("tablets_quantity")}
                value={this.state.tablets_quantity}
              />
            </div>
            <div>
              <label htmlFor="printers_quantity">
                <b>Printers Quantity: </b>
              </label>
              <input
                name="printers_quantity"
                onChange={this.handleInputChangeFor("printers_quantity")}
                value={this.state.printers_quantity}
              />
            </div>
            <div>
              <label htmlFor="tablet_stands_quantity">
                <b>Tablet Stands Quantity: </b>
              </label>
              <input
                name="tablet_stands_quantity"
                onChange={this.handleInputChangeFor("tablet_stands_quantity")}
                value={this.state.tablet_stands_quantity}
              />
            </div>
          </p>
        )}
        <button onClick={view ? this.handleEdit : this.handleSave}>
          {view ? "Edit" : "Save"}
        </button>
      </div>
    );
  }
}

const store = reduxState => ({
    reduxState
})

export default connect(store)(Locations);