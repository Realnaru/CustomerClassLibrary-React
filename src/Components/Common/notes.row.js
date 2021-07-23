import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
const service = require("../Common/services/note.service");

class NoteTableRow extends React.Component {
  render() {
    const note = this.props.note;
    return (
      <tr>
        <td>{note.note}</td>
        <td>
          <Link to={"/notes/" + note.noteId + "/edit"}>Edit</Link>&nbsp;
          <a
            to={"/notes/" + note.noteId + "/delete"}
            // onClick={() => {
            //   service.deleteNote(note.noteId).then(() => {console.log('success'); this.props.history.goBack()} ).catch(error => {
            //       console.log(error);
            //   });
            // }}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
export default withRouter(NoteTableRow);
