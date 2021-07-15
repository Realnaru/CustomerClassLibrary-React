import React from "react";
import {Link, Redirect} from "react-router-dom";
const queryString = require('query-string');

export class NotesTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: [],
            isLoaded: false
        };
    };

    componentDidMount() {
        fetch('/api/Notes/' + window.location.search).then(result => {
            return result.json().then(data => {
                this.setState({notes: data, isLoaded: true})
            })
        })
    }

    render(){
        if (!this.state.isLoaded){
            return(
                <div>
                    <h3>Loading...</h3>
                </div>
            );
        } else {
            if (this.state.isLoaded && this.state.notes.length === 0){
                return (
                    <div>
                        <h3>No notes</h3>
                    </div>
                );
            } else {
                return(
                    <div className={'text-center'}>
                        <Link to={'/notes/'+ this.state.notes[0].customerId + '/add'}>Add new</Link>
                        <table className={'text-center'}>
                            <tbody>
                            <tr>
                                <th>Note</th>
                                <th>Actions</th>
                            </tr>
                            {this.state.notes.map(note => {
                                return <TableRow key={note.noteId} note={note}/>
                            })}
                            </tbody>
                        </table>
                        <Link to={'/customers/'}>Back to customer list</Link>
                    </div>

                )
            }
        }
    }
}

class TableRow extends React.Component {
    render() {
        const note = this.props.note;
        return (
            <tr>
                <td>{note.note}</td>
                <td><Link to={'/notes/' + note.noteId + '/edit'}>Edit</Link>&nbsp;
                    <Link to={'delete'} onClick={() => {
                        fetch('/api/Notes/' + note.noteId,{method: 'DELETE'});
                        //window.location.href = '/notes/?customerId=' + note.customerId;

                    }}>Delete</Link></td>
            </tr>
        )
    }

}
