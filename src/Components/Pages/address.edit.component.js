import React from "react";
import { Formik, Field, Form } from 'formik';
import {AddressService} from "../Common/address.service";
import {Link} from "react-router-dom";
const service = new AddressService();


export class AddressEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            entity: {}
        }
    }

    componentDidMount() {
        const addressId = this.props.match.params.id;
        service.getAddress(addressId, this);
    }

    render(){
        return (
            <div className={'text-center'}>
                <Formik
                    initialValues={this.state.entity}
                    enableReinitialize

                    onSubmit={(values) => {
                        const addressId = this.props.match.params.id
                        service.updateAddress(values, addressId);
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
                <Link to={'/customers'}>Back to customers list</Link>
            </div>
        )
    }

}