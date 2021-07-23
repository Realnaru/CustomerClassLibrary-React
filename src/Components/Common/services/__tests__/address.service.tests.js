import {
  createAddress,
  getAddresses,
  getAddress,
  updateAddress,
  deleteAddress,
} from "../address.service";

jest.mock("../api.manager", () => {
  return {
    apiManager: {
      setData: (params) => {
        return Promise.resolve(params);
      },
      getData: (url) => {
        return Promise.resolve(url);
      },
      getEntitiesData: (url) => {
        return Promise.resolve(url);
      },
      deleteData: (url) => {
        return Promise.resolve(url);
      },
    },
  };
});

describe("Address service tests", () => {
  test("Should create address", async () => {
    const address = {
      addressId: 2,
      customerId: 1,
      adressLine: "Address line",
      adressLine2: "Address Line 2",
      addressType: "Billing",
      city: "Anonwill",
      postalCode: "123456",
      state: "York",
      country: "Canada",
    };
    const params = await createAddress(address);

    expect(params).toStrictEqual({
      addressId: 2,
      customerId: 1,
      adressLine: "Address line",
      adressLine2: "Address Line 2",
      addressType: "Billing",
      city: "Anonwill",
      postalCode: "123456",
      state: "York",
      country: "Canada",
    });
  });

  test("Should get all addresses", async () => {
    const url = await getAddresses(1);
    expect(url).toBe("/api/Addresses/1");
  });

  test("Should get address by address id", async () => {
    const url = await getAddress(1);
    expect(url).toBe("/api/Addresses/1");
  });

  test("Should update address", async () => {
    const values = {
      addressId: 2,
      customerId: 1,
      adressLine: "Address line",
      adressLine2: "Address Line 2",
      addressType: "Billing",
      city: "Anonwill",
      postalCode: "123456",
      state: "York",
      country: "Canada",
    };
    const params = await updateAddress(values, 1);
    expect(params).toStrictEqual({
      addressId: 2,
      customerId: 1,
      adressLine: "Address line",
      adressLine2: "Address Line 2",
      addressType: "Billing",
      city: "Anonwill",
      postalCode: "123456",
      state: "York",
      country: "Canada",
    });
  });
});
