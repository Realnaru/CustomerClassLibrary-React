import { apiManager } from "../api.manager";
import "core-js/stable";
import "regenerator-runtime/runtime";
const fetchMock = require("fetch-mock-jest");

fetchMock
  .get("/api/Customer/1", {
    customerId: 1,
    firstName: "John",
    lastName: "Doe",
    addressesList: [{}],
    phoneNumber: "123456",
    email: "jd@gmail.com",
    note: [{}],
    totalPurshasesAmount: 100,
  })
  .get("api/Customers/", [
    {
      customerId: 1,
      firstName: "John",
      lastName: "Doe",
      addressesList: [{}],
      phoneNumber: "123456",
      email: "jd@gmail.com",
      note: [{}],
      totalPurshasesAmount: 100,
    },
    {
      customerId: 2,
      firstName: "Jen",
      lastName: "Doe",
      addressesList: [{}],
      phoneNumber: "123456",
      email: "jd@gmail.com",
      note: [{}],
      totalPurshasesAmount: 100,
    },
  ]);

describe("API manager tests", () => {
  test("Should be able to get customer", async () => {
    const customer = await apiManager.getData("/api/Customer/1");

    expect(customer).toStrictEqual({
      customerId: 1,
      firstName: "John",
      lastName: "Doe",
      addressesList: [{}],
      phoneNumber: "123456",
      email: "jd@gmail.com",
      note: [{}],
      totalPurshasesAmount: 100,
    });
  });
  test("Should be able to get customers", async () => {
    const customers = await apiManager.getEntitiesData("api/Customers/");

    expect(customers).toStrictEqual([
      {
        customerId: 1,
        firstName: "John",
        lastName: "Doe",
        addressesList: [{}],
        phoneNumber: "123456",
        email: "jd@gmail.com",
        note: [{}],
        totalPurshasesAmount: 100,
      },
      {
        customerId: 2,
        firstName: "Jen",
        lastName: "Doe",
        addressesList: [{}],
        phoneNumber: "123456",
        email: "jd@gmail.com",
        note: [{}],
        totalPurshasesAmount: 100,
      },
    ]);
  });
});
