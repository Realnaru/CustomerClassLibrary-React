import React from "react";
import getData from "../Common/getdata.component";
import {AddressService} from "../Common/address.service";
const service = new AddressService();

export class AddressDetails extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            entity: {}
        }
    }

    componentDidMount() {
        const addressId = this.props.match.params.id;
        service.getAddress(addressId, this);
    }

    render(){
        return(
            <div className={'text-center'}>
                <label>Address line</label><br/>
                <label>{this.state.entity.adressLine}</label><br/>
                <label>Address line 2</label><br/>
                <label>{this.state.entity.adressLine2}</label><br/>
                <label>Address type</label><br/>
                <label>{this.state.entity.addressType}</label><br/>
                <label>City</label><br/>
                <label>{this.state.entity.city}</label><br/>
                <label>Postal code</label><br/>
                <label>{this.state.entity.postalCode}</label><br/>
                <label>State</label><br/>
                <label>{this.state.entity.state}</label><br/>
                <label>Country</label><br/>
                <label>{this.state.entity.country}</label><br/>
            </div>
        );
    }
}