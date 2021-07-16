import React from "react";
import { Formik, Field, Form } from 'formik';
import getData from "../Common/getdata.component";
import setData from "../Common/setdata.component";
import {stringify} from "query-string";

export class CustomerEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            entity: {}
        }
    }

    componentDidMount() {
        getData('/api/Customers/' + this.props.match.params.id, this);
    }


    render(){
        return (
        <div className={'text-center'}>
            <Formik
                initialValues={this.state.entity}
                enableReinitialize

                onSubmit={(values) => {

                    //this.setData(values);
                    setData(values,'/api/Customers/' + this.props.match.params.id,'PUT');
                    setTimeout(() => {window.location.href = '/customers'}, 500);
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