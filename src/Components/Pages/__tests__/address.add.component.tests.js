import ReactTestRenderer from 'react-test-renderer';
import {AddressAddForm} from "../address.add.component";
const service = require('../../Common/services/address.service');

jest.mock('../../Common/services/address.service');

describe('Address add page tests', () => {
    test('Should be rendered correctly', () => {
        const renderer = ReactTestRenderer.create(<AddressAddForm/>);
        const instance = renderer.root;
        expect(instance.findAllByType('label')[0].children).toStrictEqual(['Address line']);
        expect(instance.findAllByType('label')[1].children).toStrictEqual(['Address line 2']);
        expect(instance.findAllByType('label')[2].children).toStrictEqual(['Address type']);
        expect(instance.findAllByType('label')[3].children).toStrictEqual(['City']);
        expect(instance.findAllByType('label')[4].children).toStrictEqual(['Postal code']);
        expect(instance.findAllByType('label')[5].children).toStrictEqual(['State']);
        expect(instance.findAllByType('label')[6].children).toStrictEqual(['Country']);
        expect(instance.findByType('button').children).toStrictEqual(['Submit']);
    })
})