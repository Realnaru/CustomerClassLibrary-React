import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} from "../note.service";

jest.mock("../api.manager", () => {
  return {
    apiManager: {
      setData: (params) => {
        return Promise.resolve(params);
      },
      getData: (url) => {
        return Promise.resolve(url);
      },
      getEntitiesData: (url) => {
        return Promise.resolve(url);
      },
      deleteData: (url) => {
        return Promise.resolve(url);
      },
    },
  };
});

describe("Note service tests", () => {
  test("Should create note", async () => {
    const values = {
      noteId: 1,
      customerId: 1,
      note: "Kitty ipsum",
    };
    const params = await createNote(values);
    expect(params).toStrictEqual({
      noteId: 1,
      customerId: 1,
      note: "Kitty ipsum",
    });
  });

  test("Should get all notes by customerId", async () => {
    const url = await getNotes(1);
    expect(url).toBe("/api/Notes/1");
  });

  test("Should get note", async () => {
    const url = await getNote(2);
    expect(url).toBe("/api/Notes/2");
  });

  test("Should update note", async () => {
    const values = {
      noteId: 1,
      customerId: 1,
      note: "Kitty ipsum",
    };

    const params = await updateNote(values, 1);
    expect(params).toStrictEqual({
      noteId: 1,
      customerId: 1,
      note: "Kitty ipsum",
    });
  });

  test("Should delete note", async () => {
    const url = await deleteNote(1);
    expect(url).toBe("/api/Notes/1");
  });
});
