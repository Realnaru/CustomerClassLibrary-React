import React from "react";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
//import {CustomerService} from "./customer.service";
//const service = new CustomerService();
const service = require('../Common/customer.service');

class CustomerTableRow extends React.Component {

    render() {
        const customer = this.props.customer;
        return(
            <tr><td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.phoneNumber}</td>
                <td><Link to={'/addresses/?customerId=' + customer.customerId}>Addresses</Link></td>
                <td><Link to={'/notes/?customerId=' + customer.customerId}>Notes</Link></td>
                <td>{customer.email}</td>
                <td>{customer.totalPurshasesAmount}</td>
                <td><Link to={'/customers/' + customer.customerId +'/edit'}>Edit</Link>&nbsp;
                    <Link to={'/customers/' + customer.customerId + '/details'}>Details</Link>&nbsp;
                    <a href={'#'} onClick={() => {
                        service.deleteCustomer(customer.customerId);
                        setTimeout(() => window.location.reload(), 500);
                    }}>Delete</a></td></tr>
        )
    }
}
export default CustomerTableRow;