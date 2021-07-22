import EventEmitter from "events";
class ApiManager extends EventEmitter {
  errors = [];

  setData(values, url, method) {
    return fetch(url, {
      method: method,
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        this.errors.push(error);
        this.emit("apiError", error);
      });
  }

  getEntitiesData(url) {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        this.errors.push(error);
        this.emit("apiError", error);
      });
  }

  getData(url) {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        this.errors.push(error);
        this.emit("apiError", error);
      });
  }

  deleteData(url) {
    return fetch(url, { method: "DELETE" })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        this.errors.push(error);
        this.emit("apiError", error);
      });
  }
}
export const apiManager = new ApiManager();
