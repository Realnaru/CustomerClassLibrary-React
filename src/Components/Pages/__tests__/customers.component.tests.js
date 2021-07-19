import ReactTestRenderer from 'react-test-renderer';
import {CustomersTable} from "../customers.component";
import CustomerTableRow from "../../Common/customer.row";
const service = require('../../Common/services/customer.service');

jest.mock("react-router-dom", () => {return {Link: () => {return <a/>}}});
jest.mock('../../Common/services/customer.service');


describe('Customers component tests', () => {

    test('Should be rendered correctly with no data', () => {

        service.getCustomers.mockImplementation(() => Promise.resolve( []));
        const renderer = ReactTestRenderer.create(<CustomersTable/>)
        const instance = renderer.root;
        expect(instance.findByType('h3').children).toEqual(['Loading...']);
    })


    test('Should be rendered correctly when there are no customers', (done) => {

        service.getCustomers.mockImplementation(() => Promise.resolve([]));
        const renderer = ReactTestRenderer.create(<CustomersTable/>);
        const instance = renderer.root;
       expect(instance.findByType('h3').children).toEqual(['Loading...']);

        setTimeout(() => {
            expect(instance.findByType('h3').children).toEqual(['No customers'])
            done()
        }, 0);
    })

    test("Should be rendered with one Customer", (done) => {

        service.getCustomers.mockImplementation(() => Promise.resolve([{
            customerId: 1,
            firstName: 'John',
            lastName: 'Doe',
            addressesList: [{}],
            phoneNumber: '123456',
            email: 'jd@gmail.com',
            note: [{}],
            totalPurshasesAmount: 100,
        }]));

        const renderer = ReactTestRenderer.create(<CustomersTable/>);
        const instance = renderer.root;
         expect(instance.findByType('h3').children).toEqual(['Loading...']);

         setTimeout(() => {
            expect(instance.findAllByType(CustomerTableRow).length).toBe(1);
            done()
        }, 0);
    })

    test("Should be rendered with several Customers", (done) => {

        service.getCustomers.mockImplementation(() => Promise.resolve([{
            customerId: 1,
            firstName: 'John',
            lastName: 'Doe',
            addressesList: [{}],
            phoneNumber: '123456',
            email: 'jd@gmail.com',
            note: [{}],
            totalPurshasesAmount: 100,
        }, {
            customerId: 2,
            firstName: 'John',
            lastName: 'Doe',
            addressesList: [{}],
            phoneNumber: '123456',
            email: 'jd@gmail.com',
            note: [{}],
            totalPurshasesAmount: 100,
        }]));

        const renderer = ReactTestRenderer.create(<CustomersTable/>);
        const instance = renderer.root;
        expect(instance.findByType('h3').children).toEqual(['Loading...']);
        setTimeout(() => {
            expect(instance.findAllByType(CustomerTableRow).length).toBe(2);
            done()
        }, 0);
    })
});