import ReactTestRenderer from "react-test-renderer";
import { AddressesTable } from "../addresses.component";
import AddressTableRow from "../../Common/address.row";
const service = require("../../Common/services/address.service");

jest.mock("../../Common/services/address.service");
jest.mock("react-router-dom", () => {
  return {
    Link: () => {
      return <a />;
    },
  };
});

describe("Addresses component tests", () => {
  test("Should be rendered correctly with no data", () => {
    service.getAddresses.mockImplementation(() => {
      return Promise.resolve([]);
    });

    const renderer = ReactTestRenderer.create(<AddressesTable />);
    const instance = renderer.root;
    expect(instance.findByType("h3").children).toEqual(["Loading..."]);
  });

  test("Should be rendered correctly with no Addresses", (done) => {
    service.getAddresses.mockImplementation(() => {
      return Promise.resolve([]);
    });
    const renderer = ReactTestRenderer.create(<AddressesTable />);
    const instance = renderer.root;

    expect(instance.findByType("h3").children).toEqual(["Loading..."]);
    setTimeout(() => {
      expect(instance.findByType("h3").children).toEqual(["No addresses"]);
      done();
    }, 0);
  });

  test("Should be rendered correctly with one Address", () => {
    service.getAddresses.mockImplementation(() => {
      return Promise.resolve([
        {
          addressId: 2,
          customerId: 1,
          adressLine: "Address line",
          adressLine2: "Address Line 2",
          addressType: "Billing",
          city: "Anonwill",
          postalCode: "123456",
          state: "York",
          country: "Canada",
        },
      ]);
    });
    const renderer = ReactTestRenderer.create(<AddressesTable />);
    const instance = renderer.root;

    expect(instance.findByType("h3").children).toEqual(["Loading..."]);
    setTimeout(() => {
      expect(instance.findAllByType(AddressTableRow).length).toBe(1);
    }, 0);
  });

  test("Should be rendered correctly with several Addresses", (done) => {
    service.getAddresses.mockImplementation(() => {
      return Promise.resolve([
        {
          addressId: 2,
          customerId: 1,
          adressLine: "Address line",
          adressLine2: "Address Line 2",
          addressType: "Billing",
          city: "Anonwill",
          postalCode: "123456",
          state: "York",
          country: "Canada",
        },
        {
          addressId: 3,
          customerId: 1,
          adressLine: "Address line",
          adressLine2: "Address Line 2",
          addressType: "Billing",
          city: "Anonwill",
          postalCode: "123456",
          state: "York",
          country: "Canada",
        },
      ]);
    });

    const renderer = ReactTestRenderer.create(<AddressesTable />);
    const instance = renderer.root;

    expect(instance.findByType("h3").children).toEqual(["Loading..."]);
    setTimeout(() => {
      expect(instance.findAllByType(AddressTableRow).length).toBe(2);
      done();
    }, 0);
  });
});
