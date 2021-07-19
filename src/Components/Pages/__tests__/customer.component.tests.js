import ReactTestRenderer from 'react-test-renderer';
import {CustomerDetails} from "../customer.component";
const service = require('../../Common/services/customer.service')

jest.mock('../../Common/services/customer.service');
jest.mock('react-router-dom', () => {
    return {Link: () => {return <a/>}}
})

describe('Customer details page tests', () => {

    test('Should be rendered correctly with no data', () => {
        service.getCustomer.mockImplementation(() => Promise.resolve({}))
    });

    const renderer = ReactTestRenderer.create(<CustomerDetails/>);
    const instance = renderer.root;

})