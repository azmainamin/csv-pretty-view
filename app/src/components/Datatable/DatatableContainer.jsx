import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import DatatableView from "./DatatableView";
import { removeEmptyRows } from "../../core/ParseCSV";

export default function Datatable(props) {
  const { data, loading, columns } = props;
  function getDatatableOptions() {
    return {
      selectableRows: true,
      rowsPerPage: 100,
      rowsPerPageOptions: [50, 100, 250],
      elevation: 1,
      responsive: "scrollMaxHeight",
      print: false,
      fixedHeaderOptions: {
        xAxis: false,
        yAxis: true
      },
    };
  }

  if (loading) {
    return <CircularProgress />;
  } else {
    const tableData = removeEmptyRows(data);
    return <DatatableView data={tableData} columns={columns} options={getDatatableOptions()}/>;
  }
}
