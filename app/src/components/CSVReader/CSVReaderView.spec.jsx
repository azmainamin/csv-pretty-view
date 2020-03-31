import React from "react";
import { shallow } from "enzyme";

import CSVReaderView from "./CSVReaderView";
import CSVReader from "react-csv-reader";
import UploadButton from "../UploadButton/UploadButton";

const defaultProps = {
    handleFileLoad: jest.fn()
};

function render(props = defaultProps) {
  return shallow(<CSVReaderView {...props} />);
}

test("renders CSVReaderView component", () => {
  const rendered = render();

  expect(rendered.length).toBe(1);
});

test("renders CSVReader component", () => {
  const rendered = render();
  const csvReader = rendered.find(CSVReader);

  expect(csvReader.length).toBe(1);
});

test("renders Upload button component", () => {
  const rendered = render();
  const uploadBtn = rendered.find(UploadButton);

  expect(uploadBtn.length).toBe(1);
});
