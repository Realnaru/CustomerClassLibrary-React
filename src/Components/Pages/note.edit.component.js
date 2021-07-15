import React from "react"
import { Formik, Field, Form } from 'formik';

export class NoteEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            note: {}
        }
    }

    componentDidMount() {
        fetch('/api/Notes/' + this.props.match.params.id).then(result => {
            result.json().then(data => {
                this.setState({note: data})
            })
        });
    }

    render(){
        return (
            <div className={'text-center'}>
                <Formik
                    initialValues={this.state.note}
                    enableReinitialize
                    // onSubmit={async (values) => {
                    //     await new Promise((r) => setTimeout(r, 500));
                    //     alert(JSON.stringify(values, null, 2));
                    // }}
                    onSubmit={(values) => {
                        const note = {
                            noteId: values.noteId,
                            customerId: values.customerId,
                            note: values.note
                        }
                        fetch('/api/Notes/' + this.props.match.params.id,
                            {method: "PUT", body: JSON.stringify(note), headers: {
                                    //'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                }}).then(response => {console.log(response)});
                        console.log(JSON.stringify(note));
                    }}
                >
                    <Form>
                        <label htmlFor="note">Note</label>
                        <Field id="Note" name="note" placeholder="Note" /><br/>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        )
    }

}