import React from "react";
import { shallow } from "enzyme";
import CircularProgress from "@material-ui/core/CircularProgress";
import DatatableView from "./DatatableView";
import DatatableContainer from "./DatatableContainer";

const defaultProps = {
  data: [],
  columns: [],
  loading: false
};

function render(props = defaultProps) {
  return shallow(<DatatableContainer {...props} />);
}

test("renders spinner when loading", () => {
  const rendered = render({ data: [], columns: [], loading: true });

  const spinner = rendered.find(CircularProgress);

  expect(spinner.length).toBe(1);
});

test("renders DatatableView when we have table data", () => {
  const props = { data: [{ col1: "data1" }], columns: ["col1"], loading: false };

  const rendered = render(props);

  const dataTable = rendered.find(DatatableView);

  expect(dataTable.length).toBe(1);
});
