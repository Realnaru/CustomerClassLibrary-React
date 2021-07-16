import React from "react"
import { Formik, Field, Form } from 'formik';
import setData from "../Common/setdata.component";

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

                        setData(note,'/api/Notes/', 'POST');
                        setTimeout(() => window.location.href='/notes/?customerId=' + this.props.match.params.id, 500)
                    }}
                >
                    <Form>
                        <label htmlFor="note">First Name</label>
                        <Field id="note" name="note" placeholder="Note" /><br/>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        )
    }

}