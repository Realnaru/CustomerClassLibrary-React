import getEntitiesData from "./entities.getdata.component";
import getData from "./getdata.component";
import setData from "./setdata.component";
import deleteData from "./deletedata.component";

export class NoteService {

    createNote(values){
        // fetch('/api/Notes/', {method: 'POST', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        setData(values, '/api/Notes/', 'POST');
    }
    getNotes(customerId, component) {
        // fetch('/api/Notes/' + customerId).then(result => {
        //     return result.json().then((data) => {
        //         component.setState({
        //             entities: data,
        //             isLoaded: true
        //         })
        //     });
        // });
        getEntitiesData('/api/Notes/' + customerId, component);
    }
    getNote(noteId, component){
        // fetch('/api/Notes/' + noteId).then(result => {
        //     result.json().then(data => {
        //         component.setState({
        //             entity: data
        //         });
        //     });
        // });
        getData('/api/Notes/' + noteId, component);
    }
    updateNote(values, noteId){
        // fetch('/api/Notes/' + noteId, {method: 'PUT', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        // console.log(JSON.stringify(values));
        setData(values, '/api/Notes/' + noteId, 'PUT');
    }

    deleteNote(noteId){
        //fetch('/api/Notes/' + noteId,{method: 'DELETE'});
        deleteData('/api/Notes/' + noteId);
    }
}