import React from "react";
import ReactTestRenderer from "react-test-renderer";
import { NoteAddForm } from "../note.add.component";
const service = require("../../Common/services/note.service");

jest.mock("../../Common/services/note.service");
jest.mock("react-router-dom", () => {
  return {
    Link: () => {
      return <a />;
    },
  };
});

describe("Note add page tests", () => {
  test("Should be rendered correctly", () => {
    const renderer = ReactTestRenderer.create(<NoteAddForm />);
    const instance = renderer.root;

    expect(instance.findByType("label").children).toStrictEqual(["Note"]);
    expect(instance.findByType("input").children).toStrictEqual([]);
    expect(instance.findByType("button").children).toStrictEqual(["Submit"]);
  });
});
