import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { NoteDelete } from "../note.delete.component";
const service = require("../../Common/services/note.service");

jest.mock("../../Common/services/note.service");
jest.mock("react-router-dom", () => {
  return {
    Link: () => {
      return <a />;
    },
  };
});

describe("Note delete page tests", () => {
  test("Should be rendered correctly", (done) => {
    service.getNote.mockImplementation(() => {
      return Promise.resolve({
        noteId: 1,
        customerId: 1,
        note: "Kitty ipsum",
      });
    });
    const renderer = ReactTestRenderer.create(
      <NoteDelete match={{ params: { id: 1 } }} />
    );
    const instance = renderer.root;

    expect(instance.findAllByType("label")[0].children).toStrictEqual(["Note"]);
    expect(instance.findByType("button").children).toStrictEqual(["Delete"]);
    setTimeout(() => {
      expect(instance.findAllByType("label")[1].children).toStrictEqual([
        "Kitty ipsum",
      ]);
      done();
    }, 0);
  });
});
