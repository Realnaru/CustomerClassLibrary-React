import React from "react"
import { Formik, Field, Form } from 'formik';

export class NoteAddForm extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div className={'text-center'}>
                <Formik
                    initialValues={
                        {note : ""}
                    }
                    //enableReinitialize
                    // onSubmit={async (values) => {
                    //     await new Promise((r) => setTimeout(r, 500));
                    //     alert(JSON.stringify(values, null, 2));
                    // }}
                    onSubmit={(values) => {
                        let note ={
                            customerId: this.props.match.params.id,
                            noteId: 0,
                            note: values.note
                        }
                        fetch('/api/Notes/',
                            {method: "POST", body: JSON.stringify({note}), headers: {
                                    //'Accept': 'application/json',
                                    //'Content-Type': 'application/json'
                                }}).then(response => {console.log(response)});
                        console.log(JSON.stringify(note));
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