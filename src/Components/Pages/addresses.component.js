import React from "react";
import {Link, Redirect} from "react-router-dom";
const queryString = require('query-string');

export class AddressesTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            addresses: [],
            isLoaded: false
        };
    };

    componentDidMount() {
        fetch('/api/Addresses/' + window.location.search).then(result => {
            return result.json().then(data => {
                this.setState({addresses: data, isLoaded: true})
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
            if (this.state.isLoaded && this.state.addresses.length === 0){
                return (
                    <div>
                        <h3>No addresses</h3>
                    </div>
                );
            } else {
                return(
                    <table className={'text-center'}>
                        <tbody>
                        <tr>
                            <th>Address line</th>
                            <th>Address line 2</th>
                            <th>Address type</th>
                            <th>City</th>
                            <th>Postal code</th>
                            <th>State</th>
                            <th>Country</th>
                            <th>Actions</th>
                        </tr>
                        {this.state.addresses.map(address => {
                            return <TableRow key={address.addressId} address={address}/>
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
                <td><Link to={'/'}>Edit</Link>&nbsp;
                    <Link to={'/addresses/' + address.addressId}>Details</Link>&nbsp;
                    <Link to={'/'}>Delete</Link></td>
            </tr>
        )
    }
}
