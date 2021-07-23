import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { CustomerAddForm } from "../customer.add.component";
const service = require("../../Common/services/customer.service");

jest.mock("../../Common/services/customer.service");
jest.mock("react-router-dom", () => {
  return {
    Link: () => {
      return <a />;
    },
  };
});

describe("Customer add page tests", () => {
  test("Should be rendered correctly", () => {
    const renderer = ReactTestRenderer.create(<CustomerAddForm />);
    const instance = renderer.root;

    expect(instance.findAllByType("label")[0].children).toStrictEqual([
      "First name",
    ]);
    expect(instance.findAllByType("label")[1].children).toStrictEqual([
      "Last name",
    ]);
    expect(instance.findAllByType("label")[2].children).toStrictEqual([
      "Phone number",
    ]);
    expect(instance.findAllByType("label")[3].children).toStrictEqual([
      "Email",
    ]);
    expect(instance.findAllByType("label")[4].children).toStrictEqual([
      "Purchases amount",
    ]);
    expect(instance.findAllByType("label")[5].children).toStrictEqual([
      "Address line",
    ]);
    expect(instance.findAllByType("label")[6].children).toStrictEqual([
      "Address line 2",
    ]);
    expect(instance.findAllByType("label")[7].children).toStrictEqual([
      "Address type",
    ]);
    expect(instance.findAllByType("label")[8].children).toStrictEqual(["City"]);
    expect(instance.findAllByType("label")[9].children).toStrictEqual([
      "Postal code",
    ]);
    expect(instance.findAllByType("label")[10].children).toStrictEqual([
      "State",
    ]);
    expect(instance.findAllByType("label")[11].children).toStrictEqual([
      "Country",
    ]);
    expect(instance.findAllByType("label")[12].children).toStrictEqual([
      "Note",
    ]);
    expect(instance.findByType("button").children).toStrictEqual(["Submit"]);
  });
});
