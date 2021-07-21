import ReactTestRenderer from "react-test-renderer";
import {AddressDelete} from "../address.delete.component";
import {AddressDetails} from "../address.component";
const service = require("../../Common/services/address.service");

jest.mock("../../Common/services/address.service");
jest.mock("react-router-dom", () => {
    return {
        Link: () => {
            return <a />;
        },
    };
});

describe("Address details page tests", () => {

    test("Should be rendered correctly with no data", () => {
        service.getAddress.mockImplementation(() => {
            return Promise.resolve({});
        });
        const renderer = ReactTestRenderer.create(
            <AddressDelete match={{ params: { id: 1 } }} />
        );
        const instance = renderer.root;
        expect(instance.findAllByType("label")[0].children).toStrictEqual([
            "Address line",
        ]);
        expect(instance.findAllByType("label")[1].children).toStrictEqual([]);
        expect(instance.findAllByType("label")[2].children).toStrictEqual([
            "Address line 2",
        ]);
        expect(instance.findAllByType("label")[3].children).toStrictEqual([]);
        expect(instance.findAllByType("label")[4].children).toStrictEqual([
            "Address type",
        ]);
        expect(instance.findAllByType("label")[5].children).toStrictEqual([]);
        expect(instance.findAllByType("label")[6].children).toStrictEqual(["City"]);
        expect(instance.findAllByType("label")[7].children).toStrictEqual([]);
        expect(instance.findAllByType("label")[8].children).toStrictEqual([
            "Postal code",
        ]);
        expect(instance.findAllByType("label")[9].children).toStrictEqual([]);
        expect(instance.findAllByType("label")[10].children).toStrictEqual([
            "State",
        ]);
        expect(instance.findAllByType("label")[11].children).toStrictEqual([]);
        expect(instance.findAllByType("label")[12].children).toStrictEqual([
            "Country",
        ]);
        expect(instance.findAllByType("label")[13].children).toStrictEqual([]);
    });


    test("Should be rendered correctly", (done) => {
        service.getAddress.mockImplementation(() => {
            return Promise.resolve({
                addressId: 3,
                customerId: 1,
                adressLine: "Address line",
                adressLine2: "Address line 2",
                addressType: "Billing",
                city: "Anonvill",
                postalCode: "123456",
                state: "York",
                country: "Canada",
            });
        });
        const renderer = ReactTestRenderer.create(
            <AddressDelete match={{ params: { id: 1 } }} />
        );
        const instance = renderer.root;
        setTimeout(() => {
            expect(instance.findAllByType("label")[1].children).toStrictEqual([
                "Address line",
            ]);
            expect(instance.findAllByType("label")[3].children).toStrictEqual([
                "Address line 2",
            ]);
            expect(instance.findAllByType("label")[5].children).toStrictEqual([
                "Billing",
            ]);
            expect(instance.findAllByType("label")[7].children).toStrictEqual([
                "Anonvill",
            ]);
            expect(instance.findAllByType("label")[9].children).toStrictEqual([
                "123456",
            ]);
            expect(instance.findAllByType("label")[11].children).toStrictEqual([
                "York",
            ]);
            expect(instance.findAllByType("label")[13].children).toStrictEqual([
                "Canada",
            ]);
            done();
        });
    });
});
