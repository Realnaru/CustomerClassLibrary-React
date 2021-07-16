
function setData(values, url, method){
    fetch(url, {method: method, body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
    console.log(JSON.stringify(values));
}
export default setData;