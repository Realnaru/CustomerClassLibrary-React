
function setData(values, url, method){
    return fetch(url, {method: method, body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {return response});
}
export default setData;