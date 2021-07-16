import React from "react";
import {Link} from "react-router-dom";
import CustomerTableRow from "../Common/customer.row";
import {CustomerService} from "../Common/customer.service";
import getEntitiesData from "../Common/entities.getdata.component";
const service = new CustomerService();


export class CustomersTable extends  React.Component{
    constructor(props) {
        super(props);

        this.state = {
            entities: [],
            isLoaded: false
        };
    };

    componentDidMount() {
        getEntitiesData('api/Customers/', this)
        // let result1;
        // service.getCustomers().then((data) => {
        //     result1 = data
        // });
        //
        // if (result1){
        //     this.setState({
        //         entities: result1,
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
                    <h3>No customers</h3>
                </div>
                );
            } else {
                return(
                    <>
                        <Link to={"/customers/add"}>Add new customer</Link>
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
                    {this.state.entities.map(customer => {
                        return <CustomerTableRow key={customer.customerId} customer={customer}/>
                        })}
                        </tbody>
                    </table>
                    </>
                )
            }
        }
    }
}



