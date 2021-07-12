import React from "react";
import {Link, Redirect} from "react-router-dom";
const queryString = require('query-string');

export class CustomerDetails extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            customer: {},
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('/api/Customers/' + this.props.match.params.id).then(result => {
            return result.json().then(data => {
                this.setState({customer: data, isLoaded: true})
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
            if (this.state.isLoaded && this.state.customer === {}){
                return (
                    <div>
                        <h3>No customer</h3>
                    </div>
                );
            } else {
                return(
                    <div className={'text-center'}>
                        <label>First name</label><br/>
                        <label>{this.state.customer.firstName}</label><br/>
                        <label>Last name</label><br/>
                        <label>{this.state.customer.lastName}</label><br/>
                        <label>Phone number</label><br/>
                        <label>{this.state.customer.phoneNumber}</label><br/>
                        <label>Email</label><br/>
                        <label>{this.state.customer.email}</label><br/>
                        <label>Total purchases amount</label><br/>
                        <label>{this.state.customer.totalPurshasesAmount}</label><br/>
                    </div>
                )
            }
        }
    }
}