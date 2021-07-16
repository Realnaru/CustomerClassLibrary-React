import React from "react";
import {Link} from "react-router-dom";
import deleteData from "./deletedata.component";

class NoteTableRow extends React.Component {
    render() {
        const note = this.props.note;
        return (
            <tr>
                <td>{note.note}</td>
                <td><Link to={'/notes/' + note.noteId + '/edit'}>Edit</Link>&nbsp;
                    <Link to={'delete'} onClick={() => {
                        deleteData('/api/Notes/' + note.noteId);
                        setTimeout(() => {window.location.href = '/notes/?customerId=' + note.customerId}, 500);
                    }}>Delete</Link></td>
            </tr>
        )
    }
}
export default NoteTableRow;