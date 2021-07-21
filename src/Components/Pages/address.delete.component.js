import React from "react";
import { Link } from "react-router-dom";
const service = require("../Common/services/address.service");

export class AddressDelete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entity: {},
    };
  }

  componentDidMount() {
    const addressId = this.props.match.params.id;
    service.getAddress(addressId).then((data) => {
      this.setState({
        entity: data,
      });
    });
  }

  render() {
    return (
      <>
        <div className={"text-center"}>
          <label>Address line</label>
          <br />
          <label>{this.state.entity.adressLine}</label>
          <br />
          <label>Address line 2</label>
          <br />
          <label>{this.state.entity.adressLine2}</label>
          <br />
          <label>Address type</label>
          <br />
          <label>{this.state.entity.addressType}</label>
          <br />
          <label>City</label>
          <br />
          <label>{this.state.entity.city}</label>
          <br />
          <label>Postal code</label>
          <br />
          <label>{this.state.entity.postalCode}</label>
          <br />
          <label>State</label>
          <br />
          <label>{this.state.entity.state}</label>
          <br />
          <label>Country</label>
          <br />
          <label>{this.state.entity.country}</label>
          <br />
          <button
            onClick={() => {
              service
                .deleteAddress(this.state.entity.addressId)
                .then(
                  this.props.history.push(
                    "/addresses/?customerId=" + this.state.entity.customerId
                  )
                );
            }}
          >
            Delete
          </button>
          <Link to={"/customers"}>Back to customers list</Link>
        </div>
      </>
    );
  }
}
