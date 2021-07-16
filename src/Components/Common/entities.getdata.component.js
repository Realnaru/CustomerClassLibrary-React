
function getEntitiesData(url, component){
    fetch(url).then(result => {
        return result.json().then(data => {
            component.setState({entities: data, isLoaded: true})
        })
    })
}
export default getEntitiesData;