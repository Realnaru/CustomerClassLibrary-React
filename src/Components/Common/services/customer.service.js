import getEntitiesData from "./entities.getdata.component";
import getData from "./getdata.component";
import setData from "./setdata.component";
import deleteData from "./deletedata.component";

// export class CustomerService{

export function createCustomer(values) {
  // fetch('/api/Customers/', {method: 'POST', body: JSON.stringify(values), headers: {
  //         'Content-Type': 'application/json'
  //     }}).then(response => {console.log(response)});
  return setData(values, "/api/Customers/", "POST");
}
export function getCustomers() {
  // fetch('api/Customers/').then(result => {
  //     return result.json().then(data => {
  //        component.setState({entities: data,
  //        isLoaded: true});
  //     });
  // });
  return getEntitiesData("api/Customers/");
}

export function getCustomer(customerId) {
  // fetch('/api/Customers/' + customerId).then(result => {
  //     result.json().then(data => {
  //         component.setState({entity: data})
  //     })
  // });
  return getData("/api/Customers/" + customerId);
}
export function updateCustomer(values, customerId) {
  // fetch('/api/Customers/' + customerId, {method: 'PUT', body: JSON.stringify(values), headers: {
  //         'Content-Type': 'application/json'
  //     }}).then(response => {console.log(response)});
  // console.log(JSON.stringify(values));
  return setData(values, "/api/Customers/" + customerId, "PUT");
}

export function deleteCustomer(customerId) {
  // fetch('/api/Customers/' + customerId,{method: 'DELETE'}).then((response) => {
  //     return response
  // });
  return deleteData("/api/Customers/" + customerId);
}
// }
