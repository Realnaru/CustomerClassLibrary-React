
function setData(values, url, method){
    fetch(url, {method: method, body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
}
export default setData;