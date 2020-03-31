import React, { Component } from "react";
import DatatableContainer from "../Datatable/DatatableContainer";
import CircularProgress from "@material-ui/core/CircularProgress";
import CSVReaderView from "./CSVReaderView";

class CSVReaderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      columnNames:[]
    };

    this.uploadCsvFileData = this.uploadCsvFileData.bind(this);
  }

  uploadCsvFileData(result) {
    const columnNames = this.getColumnNames(result[0]);

    this.setState({ data: result, columnNames:columnNames, loading: false });
  }

  getColumnNames(row) {
    return Object.keys(row)
  }

  render() {
    const { loading, data, columnNames } = this.state;

    if (!loading && data.length === 0) {
      return (
        <div>
          <CSVReaderView handleFileLoad={this.uploadCsvFileData} />
        </div>
      );
    } else if (!loading && data.length > 0) {
      return (
        <div>
          <CSVReaderView handleFileLoad={this.uploadCsvFileData} />
          <DatatableContainer
            data={this.state.data}
            loading={this.state.loading}
            columns={columnNames}
          />
        </div>
      );
    } else {
      return <CircularProgress style={{marginTop: 25}}/>;
    }
  }
}

export default CSVReaderContainer;
