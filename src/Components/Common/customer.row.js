import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Router } from "react-router-dom";
const service = require("./services/customer.service");

class CustomerTableRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const customer = this.props.customer;
    return (
      <tr>
        <td>{customer.firstName}</td>
        <td>{customer.lastName}</td>
        <td>{customer.phoneNumber}</td>
        <td>
          <Link to={"/addresses/?customerId=" + customer.customerId}>
            Addresses
          </Link>
        </td>
        <td>
          <Link to={"/notes/?customerId=" + customer.customerId}>Notes</Link>
        </td>
        <td>{customer.email}</td>
        <td>{customer.totalPurshasesAmount}</td>
        <td>
          <Link to={"/customers/" + customer.customerId + "/edit"}>Edit</Link>
          &nbsp;
          <Link to={"/customers/" + customer.customerId + "/details"}>
            Details
          </Link>
          &nbsp;
          <Link to={"customers/" + customer.customerId + "/delete"}>
            Delete
          </Link>
        </td>
      </tr>
    );
  }
}
export default withRouter(CustomerTableRow);
