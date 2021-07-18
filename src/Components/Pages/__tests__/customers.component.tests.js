import ReactTestRenderer from 'react-test-renderer';
import {CustomersTable} from "../customers.component";

jest.mock('../../Common/customer.service', () => {
    return {
        getCustomers: () => {
            return Promise.resolve([]);
        }
    }
})

describe('Customers component tests', () => {
    test('Should be rendered correctly with no data', () => {
        const renderer = ReactTestRenderer.create(<CustomersTable/>)
        const instance = renderer.root;
        expect(instance.findByType('h3').children).toEqual(['Loading...']);
    })

    test('Should be rendered correctly then there are no customers', () => {

        const renderer = ReactTestRenderer.create(<CustomersTable/>);
        const instance1 = renderer.root;
        expect(instance1.findByType('h3').children).toEqual(['Loading...']);

    })
});