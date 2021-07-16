import React from "react";
import { Formik, Field, Form } from 'formik';
import {stringify} from "query-string";
import setData from "../Common/setdata.component";
import {AddressService} from "../Common/address.service";
const service = new AddressService();

export class AddressAddForm extends React.Component {
    constructor(props) {
        super(props);
        }


    render(){
        return (
            <div className={'text-center'}>
                <Formik
                    initialValues={
                        {
                            addressLine: "",
                            addressLine2: "",
                            addressType: "",
                            city: "",
                            postalCode: "",
                            state: "",
                            country: ""
                        }
                    }

                    onSubmit={(values) => {
                        const address ={
                            addressId: 0,
                            customerId: (Number)(this.props.match.params.id),
                            adressLine: values.addressLine,
                            adressLine2: values.addressLine2,
                            addressType: values.addressType,
                            city: values.city,
                            postalCode: values.postalCode,
                            state: values.state,
                            country: values.country
                        }

                        service.createAddress(address);
                        setTimeout(() => window.location.href = '/addresses/?customerId=' +
                            this.props.match.params.id, 100)
                    }
                    }
                >
                    <Form>
                        <label htmlFor="addressLine">Address line</label>
                        <Field id="addressLine" name="addressLine" placeholder="Jane" /><br/>

                        <label htmlFor="addressLine2">Address line 2</label>
                        <Field id="addressLine2" name="addressLine2" placeholder="Doe" /><br/>

                        <label htmlFor="addressType">Address type</label>
                        <Field id="addressType" name="addressType" placeholder="Doe" /><br/>

                        <label htmlFor="city">City</label>
                        <Field id="city" name="city" placeholder="city"/><br/>

                        <label htmlFor="postalCode">Postal code</label>
                        <Field id="postalСode" name="postalCode" placeholder="Doe" /><br/>

                        <label htmlFor="state">State</label>
                        <Field id="state" name="state" placeholder="Doe" /><br/>

                        <label htmlFor="country">Country</label>
                        <Field id="country" name="country" placeholder="Doe" /><br/>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        )
    }

}