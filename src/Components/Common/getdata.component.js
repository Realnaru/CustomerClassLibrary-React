
function getData(url){
    return fetch(url).then(result => {
        return result.json()
        })
}
export default getData;