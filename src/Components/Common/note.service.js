
export class NoteService {

    createNote(values){
        fetch('/api/Notes/', {method: 'POST', body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
    }
    getNotes(customerId, component) {
        fetch('/api/Notes/' + customerId).then(result => {
            return result.json().then((data) => {
                component.setState({
                    entities: data,
                    isLoaded: true
                })
            });
        });
    }
    getNote(noteId, component){
        fetch('/api/Notes/' + noteId).then(result => {
            result.json().then(data => {
                component.setState({
                    entity: data
                });
            });
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