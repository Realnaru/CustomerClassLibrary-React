import React from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
const service = require("../Common/services/customer.service");

export class CustomerEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entity: {},
    };
  }

  componentDidMount() {
    const customerId = this.props.match.params.id;
    service.getCustomer(customerId).then((data) => {
      this.setState({
        entity: data,
      });
    });
  }

  render() {
    return (
      <div className={"text-center"}>
        <Formik
          initialValues={this.state.entity}
          enableReinitialize
          onSubmit={(values) => {
            const customerId = this.props.match.params.id;
            service.updateCustomer(values, customerId).then(() => {
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
            <Field id="phoneNumber" name="phoneNumber" placeholder="Doe" />
            <br />

            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            />
            <br />

            <label htmlFor="totalPurchasesAmount">Total purchases amount</label>
            <Field
              id="totalPurchasesAmount"
              name="totalPurshasesAmount"
              placeholder="Doe"
            />
            <br />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <Link to={"/customers"}>Back to customers list</Link>
      </div>
    );
  }
}
