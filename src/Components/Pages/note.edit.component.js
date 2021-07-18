import React from "react"
import { Formik, Field, Form } from 'formik';
import {NoteService} from "../Common/note.service";
import {Link} from "react-router-dom";
const service = new NoteService();

export class NoteEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            entity: {}
        }
    }

    componentDidMount() {
        const noteId = this.props.match.params.id
        service.getNote(noteId, this);
    }

    render(){
        return (
            <div className={'text-center'}>
                <Formik
                    initialValues={this.state.entity}
                    enableReinitialize
                    onSubmit={(values) => {

                        const noteId = this.props.match.params.id;
                        service.updateNote(values, noteId);
                        setTimeout(() =>
                            window.location.href = '/notes/?customerId=' +
                                this.state.entity.customerId, 500)
                    }}
                >
                    <Form>
                        <label htmlFor="note">Note</label>
                        <Field id="Note" name="note" placeholder="Note" /><br/>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
                <Link to={'/customers'}>Back to customers list</Link>
            </div>
        )
    }
}