import React from "react";
import { Link } from "react-router-dom";

class AddressTableRow extends React.Component {
  render() {
    const address = this.props.address;
    return (
      <tr>
        <td>{address.adressLine}</td>
        <td>{address.adressLine2}</td>
        <td>{address.addressType}</td>
        <td>{address.city}</td>
        <td>{address.postalCode}</td>
        <td>{address.state}</td>
        <td>{address.country}</td>
        <td>
          <Link to={"/addresses/" + address.addressId + "/edit"}>Edit</Link>
          &nbsp;
          <Link to={"/addresses/" + address.addressId}>Details</Link>
          &nbsp;
          <Link to={"/addresses/" + address.addressId + "/delete"}>Delete</Link>
        </td>
      </tr>
    );
  }
}
export default AddressTableRow;
