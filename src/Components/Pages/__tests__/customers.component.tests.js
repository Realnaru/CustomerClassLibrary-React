import ReactTestRenderer from 'react-test-renderer';
import {CustomersTable} from "../customers.component";
import CustomerTableRow from "../../Common/customer.row";
//import {getCustomers} from "../../Common/services/customer.service";
const service = require('../../Common/services/customer.service')

jest.mock('../../Common/services/customer.service', () => {
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
        setTimeout(() => {
            expect(instance1.findByType('h3').children).toEqual(['No Customers']);
        }, 0);

    })

    test("Should be rendered one Beer", () => {
        jest.mock('../../Common/services/customer.service', () => {
            return {
                getCustomers: () => {
                    return Promise.resolve([{ customerId: 1
                    }]);
                }
            }
        })
        const renderer = ReactTestRenderer.create(<CustomersTable/>);
        const instance = renderer.root;
         expect(instance.findByType('h3').children).toEqual(['Loading...']);
         setTimeout(() => {
            expect(instance.findAllByType(<CustomerTableRow/>).length).toBe(1);
        }, 0);
    })
});