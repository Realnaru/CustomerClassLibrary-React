import ReactTestRenderer from "react-test-renderer";
import { NoteEditForm } from "../note.edit.component";
const service = require("../../Common/services/note.service");

jest.mock("../../Common/services/note.service");
jest.mock("react-router-dom", () => {
  return {
    Link: () => {
      return <a />;
    },
  };
});

describe("Note edit page tests", () => {
  test("Should be rendered correctly", (done) => {
    service.getNote.mockImplementation(() => {
      return Promise.resolve({
        noteId: 1,
        customerId: 1,
        note: "Kitty ipsum",
      });
    });
    const renderer = ReactTestRenderer.create(
      <NoteEditForm match={{ params: { id: 1 } }} />
    );
    const instance = renderer.root;

    expect(instance.findByType("label").children).toStrictEqual(["Note"]);
    expect(instance.findByType("button").children).toStrictEqual(["Submit"]);
    setTimeout(() => {
      expect(instance.findByType("input").props.value).toBe("Kitty ipsum");
      done();
    });
  });
});
