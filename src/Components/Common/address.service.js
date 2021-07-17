export class AddressService {
    createAddress(values){
        fetch('/api/Addresses/', {method: 'POST', body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
    }
    getAddresses(customerId, component) {
        fetch('/api/Addresses/' + customerId).then(result => {
            return result.json().then(data => {
                component.setState({
                    entities: data,
                    isLoaded: true});
            });
        });
    }

    getAddress(addressId, component){
        fetch('/api/Addresses/' + addressId).then(result => {
            result.json().then(data => {
                component.setState({
                    entity: data
                })
            })
        });
    }
    updateAddress(values, addressId){
        fetch('/api/Addresses/' + addressId, {method: 'PUT', body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
        console.log(JSON.stringify(values));
    }

    deleteAddress(addressId){
        fetch('/api/Addresses/' + addressId,{method: 'DELETE'});
    }
}