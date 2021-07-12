import React from "react";
import {Link} from "react-router-dom";
import { withRouter } from "react-router";

export class CustomersTable extends  React.Component{
    constructor(props) {
        super(props);

        this.state = {
            customers: [],
            isLoaded: false
        };
    };

    componentDidMount() {
        fetch('/api/Customers').then(result => {
            return result.json().then(data => {
                this.setState({customers: data, isLoaded: true})
            })
        })
    }

    render(){
        if (!this.state.isLoaded){
            return(
                <div>
                    <h3>Loading...</h3>
                </div>
            );
        } else {
            if (this.state.isLoaded && this.state.customers.length === 0){
                return (
                <div>
                    <h3>No customers</h3>
                </div>
                );
            } else {
                return(
                    <table className={'text-center'}>
                        <tbody>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Phone number</th>
                            <th>Addresses</th>
                            <th>Notes</th>
                            <th>Email</th>
                            <th>Total purchase amount</th>
                            <th>Actions</th>
                        </tr>
                    {this.state.customers.map(customer => {
                        return <TableRow key={customer.customerId} customer={customer}/>
                        })}
                        </tbody>
                    </table>
                )
            }
        }
    }
}

class TableRow extends React.Component {
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
                <td><Link to={'/'}>Edit</Link>&nbsp;
                    <Link to={'/customers/' + customer.customerId}>Details</Link>&nbsp;
                    <Link to={'/'}>Delete</Link></td></tr>
        )
    }

}