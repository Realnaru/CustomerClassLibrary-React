import getEntitiesData from "./entities.getdata.component";
import getData from "./getdata.component";
import setData from "./setdata.component";
import deleteData from "./deletedata.component";

//export class NoteService {

    export function createNote(values){
        // fetch('/api/Notes/', {method: 'POST', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        return setData(values, '/api/Notes/', 'POST');
    }
    export function getNotes(customerId) {
        // fetch('/api/Notes/' + customerId).then(result => {
        //     return result.json().then((data) => {
        //         component.setState({
        //             entities: data,
        //             isLoaded: true
        //         })
        //     });
        // });
        return getEntitiesData('/api/Notes/' + customerId);
    }
    export function getNote(noteId){
        // fetch('/api/Notes/' + noteId).then(result => {
        //     result.json().then(data => {
        //         component.setState({
        //             entity: data
        //         });
        //     });
        // });
        return getData('/api/Notes/' + noteId);
    }
    export function updateNote(values, noteId){
        // fetch('/api/Notes/' + noteId, {method: 'PUT', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        // console.log(JSON.stringify(values));
        return setData(values, '/api/Notes/' + noteId, 'PUT');
    }

    export function deleteNote(noteId){
        //fetch('/api/Notes/' + noteId,{method: 'DELETE'});
        return deleteData('/api/Notes/' + noteId);
    }
//}