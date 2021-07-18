
// function getEntitiesData(url, component){
//     fetch(url).then(result => {
//         return result.json().then(data => {
//             component.setState({entities: data, isLoaded: true})
//         })
//     })
// }
function getEntitiesData(url){
    return fetch(url).then(result => {
        return result.json();
    })
}
export default getEntitiesData;