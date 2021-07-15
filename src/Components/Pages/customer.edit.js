import React from "react";
import { Formik, Field, Form } from 'formik';
import {stringify} from "query-string";

export class CustomerEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            customer: {}
        }
    }

    componentDidMount() {
        fetch('/api/Customers/' + this.props.match.params.id).then(result => {
            result.json().then(data => {
                this.setState({customer: data})
            })
        });
    }

    render(){
        return (
        <div className={'text-center'}>
            <Formik
                initialValues={this.state.customer}
                enableReinitialize
                // onSubmit={async (values) => {
                //     await new Promise((r) => setTimeout(r, 500));
                //     alert(JSON.stringify(values, null, 2));
                // }}
                onSubmit={(values) => {
                    fetch('/api/Customers/' + this.props.match.params.id,
                        {method: "PUT", body: JSON.stringify({values}), headers: {
                                //'Accept': 'application/json',
                                //'Content-Type': 'application/json'
                            }}).then(response => {console.log(response)});
                    console.log(values);
                }}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" placeholder="Jane" /><br/>

                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" placeholder="Doe" /><br/>

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field id="phoneNumber" name="phoneNumber" placeholder="Doe" /><br/>

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    /><br/>

                    <label htmlFor="totalPurchasesAmount">Total purchases amount</label>
                    <Field id="totalPurchasesAmount" name="totalPurshasesAmount" placeholder="Doe" /><br/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
        )
    }

}