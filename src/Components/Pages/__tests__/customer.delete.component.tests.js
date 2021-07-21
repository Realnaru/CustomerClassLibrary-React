import ReactTestRenderer from "react-test-renderer";
import {CustomerDelete} from "../customer.delete.component";
const service = require("../../Common/services/customer.service");

jest.mock("../../Common/services/customer.service");
jest.mock("react-router-dom", () => {
    return {
        Link: () => {
            return <a />;
        },
    };
});

describe("Customer delete page tests", () => {


    test("Should be rendered correctly", (done) => {
        service.getCustomer.mockImplementation(() =>
            Promise.resolve({
                customerId: 1,
                firstName: "John",
                lastName: "Doe",
                addressesList: [{}],
                phoneNumber: "123456",
                email: "jd@gmail.com",
                note: [{}],
                totalPurshasesAmount: 100,
            })
        );
        const renderer = ReactTestRenderer.create(
            <CustomerDelete match={{ params: { id: 1 } }} />
        );
        const instance = renderer.root;

        expect(instance.findAllByType("label")[0].children).toStrictEqual([
            "First name",
        ]);
        expect(instance.findAllByType("label")[2].children).toStrictEqual([
            "Last name",
        ]);
        expect(instance.findAllByType("label")[4].children).toStrictEqual([
            "Phone number",
        ]);
        expect(instance.findAllByType("label")[6].children).toStrictEqual([
            "Email",
        ]);
        expect(instance.findAllByType("label")[8].children).toStrictEqual([
            "Total purchases amount",
        ]);
        expect(instance.findByType('button').children).toStrictEqual(['Delete'])
        setTimeout(() => {
            expect(instance.findAllByType("label")[1].children).toStrictEqual([
                "John",
            ]);
            expect(instance.findAllByType("label")[3].children).toStrictEqual([
                "Doe",
            ]);
            expect(instance.findAllByType("label")[5].children).toStrictEqual([
                "123456",
            ]);
            expect(instance.findAllByType("label")[7].children).toStrictEqual([
                "jd@gmail.com",
            ]);
            expect(instance.findAllByType("label")[9].children).toStrictEqual([
                "100",
            ]);
            done();
        }, 0);
    });
});
