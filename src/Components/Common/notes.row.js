import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
//const service = require("../Common/services/note.service");

class NoteTableRow extends React.Component {
  render() {
    const note = this.props.note;
    return (
      <tr>
        <td>{note.note}</td>
        <td>
          <Link to={"/notes/" + note.noteId + "/edit"}>Edit</Link>&nbsp;
          <Link
            to={"/notes/" + note.noteId + "/delete"}
            // onClick={() => {
            //   service.deleteNote(note.noteId).then(this.props.history.goBack);
            // }}
          >
            Delete
          </Link>
        </td>
      </tr>
    );
  }
}
export default withRouter(NoteTableRow);
