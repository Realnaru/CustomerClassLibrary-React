import { apiManager } from "./api.manager";

export function createCustomer(values) {
  return apiManager.setData(values, "/api/Customers/", "POST");
}
export function getCustomers() {
  return apiManager.getEntitiesData("api/Customers/");
}

export function getCustomer(customerId) {
  return apiManager.getData("/api/Customers/" + customerId);
}
export function updateCustomer(values, customerId) {
  return apiManager.setData(values, "/api/Customers/" + customerId, "PUT");
}

export function deleteCustomer(customerId) {
  return apiManager.deleteData("/api/Customers/" + customerId);
}
