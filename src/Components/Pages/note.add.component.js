import React from "react"
import { Formik, Field, Form } from 'formik';
//import {NoteService} from "../Common/note.service";
import {Link} from "react-router-dom";
//const service = new NoteService();
const service = require('../Common/note.service');

export class NoteAddForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className={'text-center'}>
                <Formik
                    initialValues={
                        {
                            note : ""
                        }
                    }
                    onSubmit={(values) => {
                        let note ={
                            noteId: 0,
                            customerId: (Number)(this.props.match.params.id),
                            note: values.note
                        }

                        service.createNote(note);
                        setTimeout(() => window.location.href='/notes/?customerId=' + this.props.match.params.id, 500)
                    }}
                >
                    <Form>
                        <label htmlFor="note">First Name</label>
                        <Field id="note" name="note" placeholder="Note" /><br/>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
                <Link to={'/customers'}>Back to customers list</Link>
            </div>
        )
    }

}