import React from "react";
import { Formik, Field, Form } from 'formik';
import getData from "../Common/getdata.component";
import {stringify} from "query-string";
import setData from "../Common/setdata.component";


export class AddressEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            entity: {}
        }
    }

    componentDidMount() {
        // fetch('/api/Addresses/' + this.props.match.params.id).then(result => {
        //     result.json().then(data => {
        //         this.setState({address: data})
        //     })
        // });
        getData('/api/Addresses/' + this.props.match.params.id, this)
    }

    render(){
        return (
            <div className={'text-center'}>
                <Formik
                    initialValues={this.state.entity}
                    enableReinitialize

                    onSubmit={(values) => {

                        setData(values, '/api/Addresses/' + this.props.match.params.id,"PUT")
                        setTimeout(() => window.location.href = '/addresses/?customerId=' + this.state.entity.customerId, 500)
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