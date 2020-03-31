import React from "react";
import { Typography } from "@material-ui/core";
import CSVReaderContainer from "./components/CSVReader/CSVReaderContainer";

import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "whitesmoke" }}>
      <header className="app-header">
        <Typography style={{marginTop: 105}} component="h1" variant="h1" gutterBottom>
          CSV Reader
        </Typography>
      </header>
      <CSVReaderContainer />
    </div>
  );
}

export default App;
