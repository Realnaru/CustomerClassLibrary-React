import {getNotes, getNote, createNote, updateNote, deleteNote} from "../note.service";

jest.mock('../entities.getdata.component.js', () => {
    return (url) => Promise.resolve(url)
});

jest.mock("../setdata.component", () => {
    return (params) => Promise.resolve(params)
});

jest.mock('../getdata.component', () => {
    return (url) => Promise.resolve(url)
});

jest.mock('../deletedata.component', () => {
    return (url) => Promise.resolve(url)
});

describe('Note service tests', () => {

    // fetchMock
    //     .get('api/Notes/1', [{
    //             customerId: 1,
    //             noteId: 1,
    //             note: "Kitty ipsum"
    //         },
    //         {
    //             customerId: 1,
    //             noteId: 2,
    //             note: "Shed everywhere"
    //
    //         }]
    //     )
    //     .get('api/Notes/2', {
    //         customerId: 1,
    //         noteId: 2,
    //         note: "Shed everywhere"
    //     })

    test('Should create note', async () => {
        const values = {
            noteId: 1,
            customerId: 1,
            note: "Kitty ipsum"
        }
        const params = await createNote(values);
        expect(params).toStrictEqual({
            noteId: 1,
            customerId: 1,
            note: "Kitty ipsum"
        })
    })

    test('Should get all notes by customerId', async () => {
        const url = await getNotes(1);
        expect(url).toBe('/api/Notes/1')
    })

    test('Should get note', async () => {

        const url = await getNote(2);
        expect(url).toBe('/api/Notes/2')
    })

    test('Should update note', async () => {

        const values = {
            noteId: 1,
            customerId: 1,
            note: "Kitty ipsum"
        }

        const params = await updateNote(values,1);
        expect(params).toStrictEqual({
            noteId: 1,
            customerId: 1,
            note: "Kitty ipsum"
        })
    })

    test('Should delete note', async () => {

        const url = await deleteNote(1);
        expect(url).toBe('/api/Notes/1')
    })
})