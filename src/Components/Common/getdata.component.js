
function getData(url, component){
    fetch(url).then(result => {
        result.json().then(data => {
            component.setState({entity: data})
        })
    });
}
export default getData;