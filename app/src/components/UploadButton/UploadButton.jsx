import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(3)
    }
  },
  button : {
    cursor: 'auto'
  }
}));

export default function UploadButtons(props) {
  const classes = useStyles();

  const { handleClick, disabled, children } = props;

  return (
    <div className={classes.root}>
      <Button color='primary'
        className={classes.button}
        onClick={handleClick}
        variant="contained"
        disabled={disabled}
      >
        {children}
      </Button>
    </div>
  );
}
