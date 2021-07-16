import React from "react";
import {Link, Redirect} from "react-router-dom";
import AddressTableRow from "../Common/address.row";
import {AddressService} from "../Common/address.service";
import getEntitiesData from "../Common/entities.getdata.component";
const service = new AddressService();


export class AddressesTable extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            entities: [],
            isLoaded: false
        };
    };

    componentDidMount() {
        getEntitiesData('/api/Addresses/' + window.location.search, this);
        // const addressId = window.location.search;
        // const result = service.getAddresses(addressId);
        // if (result){
        //     this.setState({
        //         entities: result,
        //         isLoaded: true
        //     });
        // };
    }

    render(){
        if (!this.state.isLoaded){
            return(
                <div>
                    <h3>Loading...</h3>
                </div>
            );
        } else {
            if (this.state.isLoaded && this.state.entities.length === 0){
                return (
                    <div>
                        <h3>No addresses</h3>
                    </div>
                );
            } else {
                return(
                    <div className={'text-center'}>
                        <Link to={"/addresses/" + this.state.entities[0].customerId + "/add"}>Add new address</Link>
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
                            {this.state.entities.map(address => {
                                return <AddressTableRow key={address.addressId} address={address}/>
                            })}
                            </tbody>
                        </table>
                        <Link to={'/customers/'}>Back to customers list</Link>
                    </div>

                )
            }
        }
    }
}


