
export class NoteService {

    createNote(values){
        fetch('/api/Notes/', {method: 'POST', body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
    }
    getNotes(customerId) {
        fetch('/api/Notes/' + customerId).then(result => {
            return result.json().then(data => {
                return data
            });
        });
    }
    getNote(customerId){
        fetch('/api/Notes/' + customerId).then(result => {
            result.json().then(data => {
                return data;
            })
        });
    }
    updateNote(values, noteId){
        fetch('/api/Notes/' + noteId, {method: 'PUT', body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
        console.log(JSON.stringify(values));
    }

    deleteNote(noteId){
        fetch('/api/Notes/' + noteId,{method: 'DELETE'});
    }
}