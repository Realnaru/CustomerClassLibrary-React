export class AddressService {
    createAddress(values){
        fetch('/api/Addresses/', {method: 'POST', body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
    }
    getAddresses(customerId) {
        fetch('/api/Addresses/' + customerId).then(result => {
            return result.json().then(data => {
                return data
            });
        });
    }
    getAddress(addressId){
        fetch('/api/Addresses/' + addressId).then(result => {
            result.json().then(data => {
                return data;
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