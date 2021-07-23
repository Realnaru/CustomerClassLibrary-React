import {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../customer.service";

import regeneratorRuntime from "regenerator-runtime";

jest.mock("../api.manager", () => {
  return {
    apiManager: {
      getData: (url) => {
        return Promise.resolve(url);
      },
      getEntitiesData: (url) => {
        return Promise.resolve(url);
      },
      setData: (params) => {
        return Promise.resolve(params);
      },
      deleteData: (url) => {
        return Promise.resolve(url);
      },
    },
  };
});

describe("Customer service tests", () => {
  test("Should create customer", async () => {
    const values = {
      customerId: 1,
      firstName: "John",
      lastName: "Doe",
      addressesList: [{}],
      phoneNumber: "123456",
      email: "jd@gmail.com",
      note: [{}],
      totalPurshasesAmount: 100,
    };
    const params = await createCustomer(values);
    expect(params).toStrictEqual({
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

  test("Should update customer", async () => {
    const values = {
      customerId: 1,
      firstName: "John",
      lastName: "Doe",
      addressesList: [{}],
      phoneNumber: "123456",
      email: "jd@gmail.com",
      note: [{}],
      totalPurshasesAmount: 100,
    };
    const params = await updateCustomer(values, 1);

    expect(params).toStrictEqual({
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

  test("Should get customers", async () => {
    const url = await getCustomers();
    expect(url).toBe("api/Customers/");
  });

  test("Should get customer", async () => {
    const url = await getCustomer(1);

    expect(url).toBe("/api/Customers/1");
  });

  test("Should delete customer", async () => {
    const url = await deleteCustomer(1);

    expect(url).toBe("/api/Customers/1");
  });
});
