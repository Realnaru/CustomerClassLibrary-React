import getEntitiesData from "./entities.getdata.component";
import getData from "./getdata.component";
import setData from "./setdata.component";
import deleteData from "./deletedata.component";

export class CustomerService{

    createCustomer(values){
        // fetch('/api/Customers/', {method: 'POST', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        setData(values, '/api/Customers/', "POST");

    }
    getCustomers(component) {
        // fetch('api/Customers/').then(result => {
        //     return result.json().then(data => {
        //        component.setState({entities: data,
        //        isLoaded: true});
        //     });
        // });
        getEntitiesData('api/Customers/', component);
    };

    getCustomer(customerId, component) {
        // fetch('/api/Customers/' + customerId).then(result => {
        //     result.json().then(data => {
        //         component.setState({entity: data})
        //     })
        // });
        getData('/api/Customers/' + customerId, component)
    }
    updateCustomer(values, customerId){
        // fetch('/api/Customers/' + customerId, {method: 'PUT', body: JSON.stringify(values), headers: {
        //         'Content-Type': 'application/json'
        //     }}).then(response => {console.log(response)});
        // console.log(JSON.stringify(values));
        setData(values, '/api/Customers/' + customerId, "PUT")
    }

    deleteCustomer(customerId){
        // fetch('/api/Customers/' + customerId,{method: 'DELETE'}).then((response) => {
        //     return response
        // });
        deleteData('/api/Customers/' + customerId)
    }
}