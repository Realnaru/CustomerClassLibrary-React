// import EventEmitter from "events";
// class ApiManager extends EventEmitter {
//   errors = [];
//
//   setData(values, url, method) {
//     return fetch(url, {
//       method: method,
//       body: JSON.stringify(values),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         this.errors.push(error);
//         this.emit("apiError", error);
//       });
//   }
// }
// export const apiManager = new ApiManager();

function setData(values, url, method) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response;
  });
}
export default setData;
