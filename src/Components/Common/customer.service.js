export class CustomerService{

    createCustomer(values){
        fetch('/api/Customers/', {method: 'POST', body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
    }
    getCustomers() {
        return fetch('api/Customers/').then(result => {
            return result.json().then((data) => {return data})
        });
    }
    getCustomer(customerId){
        fetch('/api/Customers/' + customerId).then(result => {
            result.json().then(data => {
                return data;
            })
        });
    }
    updateCustomer(values, customerId){
        fetch('/api/Customers/' + customerId, {method: 'PUT', body: JSON.stringify(values), headers: {
                'Content-Type': 'application/json'
            }}).then(response => {console.log(response)});
        console.log(JSON.stringify(values));
    }

    deleteCustomer(customerId){
        fetch('/api/Customers/' + customerId,{method: 'DELETE'});
    }
}