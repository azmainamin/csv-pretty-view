import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  }
}));

export default function UploadButtons(props) {
  const classes = useStyles();

  const { handleClick, disabled } = props;

  return (
    <div className={classes.root}>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
        component="span"
        disabled={disabled}
      >
        Upload now!
      </Button>
    </div>
  );
}
