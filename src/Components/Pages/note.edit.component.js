import React from "react";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
const service = require("../Common/services/note.service");

export class NoteEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entity: {},
    };
  }

  componentDidMount() {
    const noteId = this.props.match.params.id;
    service.getNote(noteId).then((data) => {
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
            const noteId = this.props.match.params.id;
            service
              .updateNote(values, noteId)
              .then(
                this.props.history.push(
                  "/notes/?customerId=" + this.state.entity.customerId
                )
              );
          }}
        >
          <Form>
            <label htmlFor="note">Note</label>
            <Field id="Note" name="note" placeholder="Note" />
            <br />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
        <Link to={"/notes/?customerId=" + this.state.entity.customerId}>
          Back to notes
        </Link>
      </div>
    );
  }
}
