import React from "react";
import { shallow } from "enzyme";
import MUIDataTable from "mui-datatables";
import DatatableView from "./DatatableView";

const defaultProps = {
  data: [],
  handlePredictionsButtonClick: jest.fn(),
  columns: []
};

function render(props = defaultProps) {
  return shallow(<DatatableView {...props} />);
}

test("renders MUIDatatable", () => {
    const rendered = render();
    const muiDatatable = rendered.find(MUIDataTable);

    expect(muiDatatable.length).toBe(1);
});
