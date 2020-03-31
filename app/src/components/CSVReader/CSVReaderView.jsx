import React from "react";
import { Typography } from "@material-ui/core";
import CSVReader from "react-csv-reader";
import UploadButton from "../UploadButton/UploadButton";

import "./csvReader.css";

const csvParserOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

export default function CSVReaderView(props) {
  const { handleFileLoad } = props;
  return (
    <div>
      <UploadButton>
        <CSVReader
          cssClass="csv-reader-input"
          cssInputClass="csv-input"
          label="Upload CSV"
          onFileLoaded={handleFileLoad}
          parserOptions={csvParserOptions}
          inputId="csv-reader"
          inputStyle={{ display: "none" }}
        />
      </UploadButton>
      <Typography component="h2" variant="h6" gutterBottom>
        Make sure the first row of your CSV file has the column names.
      </Typography>
    </div>
  );
}
