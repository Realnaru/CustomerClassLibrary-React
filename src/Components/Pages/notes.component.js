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
                <td><Link to={'/'}>Edit</Link>&nbsp;
                    <Link to={'/'}>Details</Link>&nbsp;
                    <Link to={'/'}>Delete</Link></td>
            </tr>
        )
    }

}
