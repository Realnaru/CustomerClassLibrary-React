import ReactTestRenderer from 'react-test-renderer';
import {AddressEditForm} from "../address.edit.component";
const service = require('../../Common/services/address.service');

jest.mock('../../Common/services/address.service');
jest.mock('react-router-dom', () => {
    return {Link: () => {
            return <a/>
        }}
})

describe('Address edit page component tests', () => {
    test('Should be rendered correctly', (done) => {
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
            })
        })

        const renderer = ReactTestRenderer.create(<AddressEditForm match = {{params: {id: 1}}}/>);
        const instance = renderer.root;

        expect(instance.findAllByType('label')[0].children).toStrictEqual(['Address line']);
        expect(instance.findAllByType('label')[1].children).toStrictEqual(['Address line 2']);
        expect(instance.findAllByType('label')[2].children).toStrictEqual(['Address type']);
        expect(instance.findAllByType('label')[3].children).toStrictEqual(['City']);
        expect(instance.findAllByType('label')[4].children).toStrictEqual(['Postal code']);
        expect(instance.findAllByType('label')[5].children).toStrictEqual(['State']);
        expect(instance.findAllByType('label')[6].children).toStrictEqual(['Country']);
        //expect(instance.findByType('a').children).toStrictEqual('Back to customers list');
        expect(instance.findByType('button').children).toStrictEqual(['Submit']);

        expect(instance.findAllByType('input')[0].children).toStrictEqual([]);
        expect(instance.findAllByType('input')[1].children).toStrictEqual([]);
        expect(instance.findAllByType('input')[2].children).toStrictEqual([]);
        expect(instance.findAllByType('input')[3].children).toStrictEqual([]);
        expect(instance.findAllByType('input')[5].children).toStrictEqual([]);
        expect(instance.findAllByType('input')[6].children).toStrictEqual([]);

        setTimeout(() => {
            expect(instance.findAllByType('input')[0].props.value).toBe('Address line');
            expect(instance.findAllByType('input')[1].props.value).toBe('Address line 2');
            expect(instance.findAllByType('input')[2].props.value).toBe('Billing');
            expect(instance.findAllByType('input')[3].props.value).toBe('Anonvill');
            expect(instance.findAllByType('input')[4].props.value).toBe('123456');
            expect(instance.findAllByType('input')[5].props.value).toBe('York');
            expect(instance.findAllByType('input')[6].props.value).toBe('Canada');
            done()
        },0)
    })
})