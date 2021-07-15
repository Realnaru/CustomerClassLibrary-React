import React from "react";
import { Formik, Field, Form } from 'formik';
import {stringify} from "query-string";

export class AddressEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            address: {}
        }
    }

    componentDidMount() {
        fetch('/api/Addresses/' + this.props.match.params.id).then(result => {
            result.json().then(data => {
                this.setState({address: data})
            })
        });
    }

    render(){
        return (
            <div className={'text-center'}>
                <Formik
                    initialValues={this.state.address}
                    enableReinitialize
                    // onSubmit={async (values) => {
                    //     await new Promise((r) => setTimeout(r, 500));
                    //     alert(JSON.stringify(values, null, 2));
                    // }}
                    onSubmit={(values) => {
                        fetch('/api/Addresses/' + this.props.match.params.id,
                            {method: "PUT", body: JSON.stringify({values}), headers: {
                                    //'Accept': 'application/json',
                                    //'Content-Type': 'application/json;charset=UTF-8'
                                }}).then(response => {console.log(response)});
                        console.log(JSON.stringify(values));
                    }}
                >
                    <Form>
                        <label htmlFor="adressLine">Address line</label>
                        <Field id="adressLine" name="adressLine" placeholder="Jane" /><br/>

                        <label htmlFor="adressLine2">Address line 2</label>
                        <Field id="adressLine2" name="adressLine2" placeholder="Doe" /><br/>

                        <label htmlFor="addressType">Address type</label>
                        <Field id="addressType" name="addressType" placeholder="Doe" /><br/>

                        <label htmlFor="city">City</label>
                        <Field id="city" name="city" placeholder="city"/><br/>

                        <label htmlFor="postalCode">Total purchases amount</label>
                        <Field id="postalСode" name="postalCode" placeholder="Doe" /><br/>

                        <label htmlFor="state">Total purchases amount</label>
                        <Field id="state" name="state" placeholder="Doe" /><br/>

                        <label htmlFor="country">Total purchases amount</label>
                        <Field id="country" name="country" placeholder="Doe" /><br/>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        )
    }

}