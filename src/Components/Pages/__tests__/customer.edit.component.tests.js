import ReactTestRenderer from "react-test-renderer";
import { CustomerEditForm } from "../customer.edit.component";
const service = require("../../Common/services/customer.service");

jest.mock("../../Common/services/customer.service");
jest.mock("react-router-dom", () => {
  return {
    Link: () => {
      return <a />;
    },
  };
});

describe("Customer edit page tests", () => {
  test("Should be rendered correctly with no data", () => {
    service.getCustomer.mockImplementation(() => {
      return Promise.resolve([]);
    });
    const renderer = ReactTestRenderer.create(
      <CustomerEditForm match={{ params: { id: 1 } }} />
    );
    const instance = renderer.root;

    expect(instance.findAllByType("label")[0].children).toStrictEqual([
      "First name",
    ]);
    expect(instance.findAllByType("input")[0].children).toStrictEqual([]);
    expect(instance.findAllByType("label")[1].children).toStrictEqual([
      "Last name",
    ]);
    expect(instance.findAllByType("input")[1].children).toStrictEqual([]);
    expect(instance.findAllByType("label")[2].children).toStrictEqual([
      "Phone number",
    ]);
    expect(instance.findAllByType("input")[2].children).toStrictEqual([]);
    expect(instance.findAllByType("label")[3].children).toStrictEqual([
      "Email",
    ]);
    expect(instance.findAllByType("input")[3].children).toStrictEqual([]);
    expect(instance.findAllByType("label")[4].children).toStrictEqual([
      "Total purchases amount",
    ]);
    expect(instance.findAllByType("input")[4].children).toStrictEqual([]);
    expect(instance.findByType('button').children).toStrictEqual(['Submit']);
  });

  test("Should be rendered correctly with data", (done) => {
    service.getCustomer.mockImplementation(() => {
      return Promise.resolve({
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
    const renderer = ReactTestRenderer.create(
      <CustomerEditForm match={{ params: { id: 1 } }} />
    );
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
      "Total purchases amount",
    ]);

    expect(instance.findAllByType("input")[0].children).toStrictEqual([]);
    expect(instance.findAllByType("input")[1].children).toStrictEqual([]);
    expect(instance.findAllByType("input")[2].children).toStrictEqual([]);
    expect(instance.findAllByType("input")[3].children).toStrictEqual([]);

    setTimeout(() => {
      expect(instance.findAllByType("input")[0].props.value).toBe("John");
      expect(instance.findAllByType("input")[1].props.value).toBe("Doe");
      expect(instance.findAllByType("input")[2].props.value).toBe("123456");
      expect(instance.findAllByType("input")[3].props.value).toBe(
        "jd@gmail.com"
      );
      expect(instance.findAllByType("input")[4].props.value).toBe(100);
      done();
    }, 0);
  });
});
