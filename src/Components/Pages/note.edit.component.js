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
                        fetch('/api/Notes/' + this.props.match.params.id,
                            {method: "PUT", body: JSON.stringify({values}), headers: {
                                    'Accept': 'application/json',
                                    //'Content-Type': 'application/json;charset=UTF-8'
                                }}).then(response => {console.log(response)});
                        console.log(JSON.stringify(values));
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