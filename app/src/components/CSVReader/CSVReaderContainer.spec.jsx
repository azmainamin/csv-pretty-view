import React from "react";
import { shallow } from "enzyme";
import CircularProgress from "@material-ui/core/CircularProgress";
import CSVReaderContainer from "./CSVReaderContainer";
import CSVReaderView from "./CSVReaderView";
import DatatableContainer from "../Datatable/DatatableContainer";

function render(props = {}) {
  return shallow(<CSVReaderContainer {...props} />);
}

test("Has correct initial state", () => {
  const renderedInstance = render();

  expect(renderedInstance.state("loading")).toBe(false);
  expect(renderedInstance.state("csvfile")).toBe(undefined);
  expect(renderedInstance.state("data").length).toBe(0);
});

test("renders spinner when loading", () => {
  const renderedInstance = render();
  renderedInstance.setState({ loading: true });

  expect(renderedInstance.state("loading")).toBe(true);
  expect(renderedInstance.find(CircularProgress).length).toBe(1);
});

test("renders CSVReaderView so that we can upload csv file", () => {
  const renderedInstance = render();
  renderedInstance.setState({ loading: false, data: [] });

  expect(renderedInstance.find(CSVReaderView).length).toBe(1);
});

test("renders CSVReaderView and Datatable when data is loaded from csv", () => {
  const renderedInstance = render();
  renderedInstance.setState({ data: [{"col1":"data1"}], loading: false });

  expect(renderedInstance.find(CSVReaderView).length).toBe(1);
  expect(renderedInstance.find(DatatableContainer).length).toBe(1);
});
