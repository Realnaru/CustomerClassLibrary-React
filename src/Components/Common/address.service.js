import getEntitiesData from "./entities.getdata.component";
import getData from "./getdata.component";
import setData from "./setdata.component";
import deleteData from "./deletedata.component";

//export class AddressService {
    export function createAddress(values){
        // fetch('/api/Addresses/', {method: 'POST', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        setData(values, '/api/Addresses/', 'POST');
    }
    export function getAddresses(customerId, component) {
        // fetch('/api/Addresses/' + customerId).then(result => {
        //     return result.json().then(data => {
        //         component.setState({
        //             entities: data,
        //             isLoaded: true});
        //     });
        // });
        return getEntitiesData('/api/Addresses/' + customerId);
    }

    export function getAddress(addressId, component){
        // fetch('/api/Addresses/' + addressId).then(result => {
        //     result.json().then(data => {
        //         component.setState({
        //             entity: data
        //         })
        //     })
        // });
        return getData('/api/Addresses/' + addressId);
    }
    export function updateAddress(values, addressId){
        // fetch('/api/Addresses/' + addressId, {method: 'PUT', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        // console.log(JSON.stringify(values));
        setData(values, '/api/Addresses/' + addressId, 'PUT');
    }

    export function deleteAddress(addressId){
        //fetch('/api/Addresses/' + addressId,{method: 'DELETE'});
        deleteData('/api/Addresses/' + addressId);
    }
//}