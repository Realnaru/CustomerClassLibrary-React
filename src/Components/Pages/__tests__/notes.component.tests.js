import ReactTestRenderer from 'react-test-renderer';
import {NotesTable} from "../notes.component";
import NoteTableRow from "../../Common/notes.row";
const service = require('../../Common/services/note.service')


jest.mock('../../Common/services/note.service')
jest.mock('react-router-dom', () => {
    return {Link: () => {return <a/>}}
});

describe('notes component tests', () => {

    test('Should be rendered correctly with no data', () => {

        service.getNotes.mockImplementation(() => {
            return Promise.resolve([]);
        })
        const renderer = ReactTestRenderer.create(<NotesTable/>);
        const instance = renderer.root;

        expect(instance.findByType('h3').children).toEqual(['Loading...']);
    })

    test('Should be rendered correctly when there are no notes', (done) => {
        service.getNotes.mockImplementation(() => {
            return Promise.resolve([]);
        })
        const renderer = ReactTestRenderer.create(<NotesTable/>);
        const instance = renderer.root;

        expect(instance.findByType('h3').children).toEqual(['Loading...']);

        setTimeout(() => {
            expect(instance.findByType('h3').children).toEqual(['No notes'])
            done()
        }, 0)
    })

    test('Should be rendered correctly if there is one note', (done) => {
        service.getNotes.mockImplementation(() => {
            return Promise.resolve([{
                noteId: 1,
                customerId: 1,
                note: "Kitty ipsum"
            }])
        })
        const renderer = ReactTestRenderer.create(<NotesTable/>);
        const instance = renderer.root;

        expect(instance.findByType('h3').children).toEqual(['Loading...']);
        setTimeout(() => {
            expect(instance.findAllByType(NoteTableRow).length).toBe(1);
            done()
        }, 0);
    })

    test('Should be rendered correctly if there are several notes', (done) => {

        service.getNotes.mockImplementation(() => {
            return Promise.resolve([{
                noteId: 1,
                customerId: 1,
                note: "Kitty ipsum"
            },
            {
                noteId: 2,
                customerId: 1,
                note: "Kitty ipsum sit amet"
            }])
        })

        const renderer = ReactTestRenderer.create(<NotesTable/>);
        const instance = renderer.root;

        expect(instance.findByType('h3').children).toEqual(['Loading...']);
        setTimeout(() => {
            expect(instance.findAllByType(NoteTableRow).length).toBe(2);
            done();
        })
    })
})