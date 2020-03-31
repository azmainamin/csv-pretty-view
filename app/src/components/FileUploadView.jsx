import React from "react";
import { Grid, Button, Input } from "@material-ui/core";
import UploadButton from "./UploadButton";

export default function FileUploadView(props) {
  const { handleChange, handleClick, disabled } = props;

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item>
        <Input
          accept="csv/*"
          style={{ display: "none" }}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="default" component="span" >
            Choose file
          </Button>
        </label>
      </Grid>
      <Grid item>
        <UploadButton handleClick={handleClick} disabled={disabled}>
          Upload now!
        </UploadButton>
      </Grid>
    </Grid>
  );
}
