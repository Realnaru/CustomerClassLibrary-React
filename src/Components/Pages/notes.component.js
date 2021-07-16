import React from "react";
import {Link, Redirect} from "react-router-dom";
import NoteTableRow from "../Common/notes.row";
import getEntitiesData from "../Common/entities.getdata.component";
import {NoteService} from "../Common/note.service";
const service = new NoteService();

export class NotesTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entities: [],
            isLoaded: false
        };
    };

    componentDidMount() {
        getEntitiesData('/api/Notes/' + window.location.search, this)
    }

    //     const customerId = window.location.search;
    //     const result = service.getNotes(customerId);
    //
    //     if (result){
    //         this.setState(
    //             {entities: result,
    //                     isLoaded: true});
    //     }
    // }

    render(){
        if (!this.state.isLoaded){
            return(
                <div>
                    <h3>Loading...</h3>
                </div>
            );
        } else {
            if (this.state.isLoaded && this.state.entities.length === 0){
                return (
                    <div>
                        <h3>No notes</h3>
                    </div>
                );
            } else {
                return(
                    <div className={'text-center'}>
                        <Link to={'/notes/'+ this.state.entities[0].customerId + '/add'}>Add new</Link>
                        <table className={'text-center'}>
                            <tbody>
                            <tr>
                                <th>Note</th>
                                <th>Actions</th>
                            </tr>
                            {this.state.entities.map(note => {
                                return <NoteTableRow key={note.noteId} note={note}/>
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


