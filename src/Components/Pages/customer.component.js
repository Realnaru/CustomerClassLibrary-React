import React from "react";
//import getData from "../Common/getdata.component";
//import {CustomerService} from "../Common/customer.service";
import {Link} from "react-router-dom";
//const service = new CustomerService();
const service = require('../Common/services/customer.service');

export class CustomerDetails extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            entity: {}
        }
    }

    componentDidMount() {
         const customerId = this.props.match.params.id;
         service.getCustomer(customerId).then(data => {
             this.setState({
                 entity: data
             })
         });
    };

    render()
    {
        return(
            <>
            <div className={'text-center'}>
                <label>First name</label><br/>
                <label>{this.state.entity.firstName}</label><br/>
                <label>Last name</label><br/>
                <label>{this.state.entity.lastName}</label><br/>
                <label>Phone number</label><br/>
                <label>{this.state.entity.phoneNumber}</label><br/>
                <label>Email</label><br/>
                <label>{this.state.entity.email}</label><br/>
                <label>Total purchases amount</label><br/>
                <label>{this.state.entity.totalPurshasesAmount}</label><br/>
            </div>
                <Link to={'/customers'}>Back to customers list</Link>
                </>
        )
    }
}