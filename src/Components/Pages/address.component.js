import React from "react";

export class AddressDetails extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            address: {},
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('/api/Addresses/' + this.props.match.params.id).then(result => {
            result.json().then(data => {
                this.setState({address: data, isLoaded: true})
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
            if (this.state.isLoaded && this.state.address === {}){
                return (
                    <div>
                        <h3>No customer</h3>
                    </div>
                );
            } else {
                return(
                    <div className={'text-center'}>
                        <label>Address line</label><br/>
                        <label>{this.state.address.adressLine}</label><br/>
                        <label>Address line 2</label><br/>
                        <label>{this.state.address.adressLine2}</label><br/>
                        <label>Address type</label><br/>
                        <label>{this.state.address.addressType}</label><br/>
                        <label>City</label><br/>
                        <label>{this.state.address.city}</label><br/>
                        <label>Postal code</label><br/>
                        <label>{this.state.address.postalCode}</label><br/>
                        <label>State</label><br/>
                        <label>{this.state.address.state}</label><br/>
                        <label>Country</label><br/>
                        <label>{this.state.address.country}</label><br/>
                    </div>
                )
            }
        }
    }
}