import React from "react"
import { Formik, Field, Form } from 'formik';
import getData from "../Common/getdata.component";
import setData from "../Common/setdata.component";

export class NoteEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            entity: {}
        }
    }

    componentDidMount() {
        // fetch('/api/Notes/' + this.props.match.params.id).then(result => {
        //     result.json().then(data => {
        //         this.setState({note: data})
        //     })
        // });
        getData('/api/Notes/' + this.props.match.params.id, this)
    }

    render(){
        return (
            <div className={'text-center'}>
                <Formik
                    initialValues={this.state.entity}
                    enableReinitialize
                    onSubmit={(values) => {
                        const note = {
                            noteId: values.noteId,
                            customerId: values.customerId,
                            note: values.note
                        }

                        setData(values,'/api/Notes/' + this.props.match.params.id, "PUT");
                        setTimeout(() => window.location.href = '/notes/?customerId=' + this.state.entity.customerId, 500)
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