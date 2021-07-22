import { apiManager } from "./api.manager";

export function createAddress(values) {
  return apiManager.setData(values, "/api/Addresses/", "POST");
}
export function getAddresses(customerId) {
  return apiManager.getEntitiesData("/api/Addresses/" + customerId);
}

export function getAddress(addressId) {
  return apiManager.getData("/api/Addresses/" + addressId);
}
export function updateAddress(values, addressId) {
  return apiManager.setData(values, "/api/Addresses/" + addressId, "PUT");
}

export function deleteAddress(addressId) {
  return apiManager.deleteData("/api/Addresses/" + addressId);
}
