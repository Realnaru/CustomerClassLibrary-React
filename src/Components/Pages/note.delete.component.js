import React from "react";
import { Link } from "react-router-dom";
const service = require("../Common/services/note.service");

export class NoteDelete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entity: {},
    };
  }

  componentDidMount() {
    const noteId = this.props.match.params.id;
    service.getNote(noteId).then((data) => {
      this.setState({
        entity: data,
      });
    });
  }

  render() {
    return (
      <>
        <div className={"text-center"}>
          <label>Note</label>
          <br />
          <label>{this.state.entity.note}</label>
          <br />

          <button
            onClick={() => {
              service
                .deleteNote(this.state.entity.noteId)
                .then(
                  this.props.history.push(
                    "/notes/?customerId=" + this.state.entity.customerId
                  )
                );
            }}
          >
            Delete
          </button>
          <Link to={"/notes/?customerId=" + this.state.entity.customerId}>
            Back to notes
          </Link>
        </div>
      </>
    );
  }
}
