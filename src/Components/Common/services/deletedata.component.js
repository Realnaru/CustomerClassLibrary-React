function deleteData(url) {
  return fetch(url, { method: "DELETE" }).then((response) => {
    return response;
  });
}
export default deleteData;
