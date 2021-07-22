import { apiManager } from "./api.manager";

export function createNote(values) {
  return apiManager.setData(values, "/api/Notes/", "POST");
}
export function getNotes(customerId) {
  return apiManager.getEntitiesData("/api/Notes/" + customerId);
}
export function getNote(noteId) {
  return apiManager.getData("/api/Notes/" + noteId);
}
export function updateNote(values, noteId) {
  return apiManager.setData(values, "/api/Notes/" + noteId, "PUT");
}

export function deleteNote(noteId) {
  return apiManager.deleteData("/api/Notes/" + noteId);
}
