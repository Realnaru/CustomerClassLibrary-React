import React from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
const service = require("../Common/services/customer.service");

export class CustomerAddForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"text-center"}>
        <h1>Add new customer</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            totalPurchasesAmount: "",
            adressLine: "",
            adressLine2: "",
            addressType: "",
            city: "",
            postalCode: "",
            state: "",
            country: "",
            note: "",
          }}
          onSubmit={(values) => {
            let customer = {
              customerId: 0,
              firstName: values.firstName,
              lastName: values.lastName,
              phoneNumber: values.phoneNumber,
              email: values.email,
              totalPurshasesAmount: Number(values.totalPurchasesAmount),
              adressesList: [
                {
                  addressId: 0,
                  customerId: 0,
                  adressLine: values.adressLine,
                  adressLine2: values.adressLine2,
                  addressType: values.addressType,
                  city: values.city,
                  postalCode: values.postalCode,
                  state: values.state,
                  country: values.country,
                },
              ],
              note: [
                {
                  noteId: 0,
                  customerId: 0,
                  note: values.note,
                },
              ],
            };

            service.createCustomer(customer).then(() => {
              this.props.history.push("/customers");
            });
          }}
        >
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field id="firstName" name="firstName" placeholder="Jane" />
            <br />

            <label htmlFor="lastName">Last name</label>
            <Field id="lastName" name="lastName" placeholder="Doe" />
            <br />

            <label htmlFor="phoneNumber">Phone number</label>
            <Field
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+71111111"
            />
            <br />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <br />
            <label htmlFor="totalPurchasesAmount">Purchases amount</label>
            <Field
              id="totalPurchasesAmount"
              name="totalPurchasesAmount"
              placeholder="0"
            />
            <br />

            <label htmlFor="adressLine">Address line</label>
            <Field id="adressLine" name="adressLine" placeholder="+71111111" />
            <br />

            <label htmlFor="adressLine2">Address line 2</label>
            <Field
              id="adressLine2"
              name="adressLine2"
              placeholder="+71111111"
            />
            <br />

            <label htmlFor="addressType">Address type</label>
            <Field
              id="addressType"
              name="addressType"
              placeholder="+71111111"
            />
            <br />

            <label htmlFor="city">City</label>
            <Field id="city" name="city" placeholder="+71111111" />
            <br />

            <label htmlFor="postalCode">Postal code</label>
            <Field id="postalCode" name="postalCode" placeholder="+71111111" />
            <br />

            <label htmlFor="state">State</label>
            <Field id="state" name="state" placeholder="+71111111" />
            <br />

            <label htmlFor="country">Country</label>
            <Field id="country" name="country" placeholder="+71111111" />
            <br />

            <label htmlFor="note">Note</label>
            <Field id="note" name="note" placeholder="+71111111" />
            <br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <Link to={"/customers"}>Back to customers list</Link>
      </div>
    );
  }
}
