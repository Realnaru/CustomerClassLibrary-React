
function deleteData(url){
    return fetch(url,{method: 'DELETE'}).then(result => {
        return result.json()
    })
}
export default deleteData;