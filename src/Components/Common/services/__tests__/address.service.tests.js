import {createAddress, getAddresses, getAddress, updateAddress, deleteAddress} from "../address.service";
const fetchMock = require('fetch-mock-jest');

jest.mock("../setdata.component", () => {
    return (params) => Promise.resolve(params)
});

jest.mock('../entities.getdata.component.js', () => {
    return (url) => Promise.resolve(url)
});

jest.mock('../getdata.component', () => {
    return (url) => Promise.resolve(url)
});

jest.mock('../deletedata.component', () => {
    return (url) => Promise.resolve(url)
});


describe('Address service tests', () => {

    test('Should create address', async () => {

        const address = {
            addressId: 2,
            customerId: 1,
            adressLine: 'Address line',
            adressLine2: 'Address Line 2',
            addressType: 'Billing',
            city: 'Anonwill',
            postalCode: '123456',
            state: 'York',
            country: 'Canada'
        }
        const params = await createAddress(address);

        expect(params).toStrictEqual({
            addressId: 2,
            customerId: 1,
            adressLine: 'Address line',
            adressLine2: 'Address Line 2',
            addressType: 'Billing',
            city: 'Anonwill',
            postalCode: '123456',
            state: 'York',
            country: 'Canada'
        })
    })

    test('Should get all addresses', async () => {

        const url = await getAddresses(1);
        expect(url).toBe('/api/Addresses/1');
    })

    test('Should get address by address id', async () => {

        const url = await getAddress(1);
        expect(url).toBe('/api/Addresses/1');

    })

    test('Should update address', async () => {

        const values = {
            addressId: 2,
            customerId: 1,
            adressLine: 'Address line',
            adressLine2: 'Address Line 2',
            addressType: 'Billing',
            city: 'Anonwill',
            postalCode: '123456',
            state: 'York',
            country: 'Canada'
        }
        const params = await updateAddress(values, 1);
        expect(params).toStrictEqual({
            addressId: 2,
            customerId: 1,
            adressLine: 'Address line',
            adressLine2: 'Address Line 2',
            addressType: 'Billing',
            city: 'Anonwill',
            postalCode: '123456',
            state: 'York',
            country: 'Canada'
        })
    })

    test('Should delete address', async () => {

        const url = await deleteAddress(1);
        expect(url).toBe('/api/Addresses/1')
    })
})