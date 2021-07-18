import getEntitiesData from "./entities.getdata.component";
import getData from "./getdata.component";
import setData from "./setdata.component";
import deleteData from "./deletedata.component";

export class AddressService {
    createAddress(values){
        // fetch('/api/Addresses/', {method: 'POST', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        setData(values, '/api/Addresses/', 'POST');
    }
    getAddresses(customerId, component) {
        // fetch('/api/Addresses/' + customerId).then(result => {
        //     return result.json().then(data => {
        //         component.setState({
        //             entities: data,
        //             isLoaded: true});
        //     });
        // });
        getEntitiesData('/api/Addresses/' + customerId, component);
    }

    getAddress(addressId, component){
        // fetch('/api/Addresses/' + addressId).then(result => {
        //     result.json().then(data => {
        //         component.setState({
        //             entity: data
        //         })
        //     })
        // });
        getData('/api/Addresses/' + addressId, component);
    }
    updateAddress(values, addressId){
        // fetch('/api/Addresses/' + addressId, {method: 'PUT', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        // console.log(JSON.stringify(values));
        setData(values, '/api/Addresses/' + addressId, 'PUT');
    }

    deleteAddress(addressId){
        //fetch('/api/Addresses/' + addressId,{method: 'DELETE'});
        deleteData('/api/Addresses/' + addressId);
    }
}