import React from "react";
import MUIDataTable from "mui-datatables";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiToolbar-root": {
      border: "1px solid #d8d8d8",
      backgroundColor: "rgba(0, 0, 0, 0.04)"
    },
    "& .MuiButtonBase-root": {
      "&:focus,&:hover": {
        color: theme.palette.primary.main
      }
    },
    "& .MuiTableSortLabel-root": {
      paddingTop: "6px"
    },
    "& .MUIDataTableToolbar-icon": {
      "&:hover": {
        color: theme.palette.primary.main
      }
    },
    "& .MUIDataTableToolbar-iconActive": {
      color: theme.palette.primary.main
    },
    "& .MUIDataTableBodyRow-root": {
      cursor: "pointer"
    },
    /**
     * @description This !important override is needed to resolve a bug in mui-datatables resulting in no height responsiveness on the table.
     * When the table is set to "scrollMaxHeight" (where the entire table view fits into the content area) an arbitrary maxHeight of 499px is
     * set with no relation to the size of the container in which the table was rendered. No other "responsive" prop exists currently that
     * fixes/helps this issue, the only solution currently available is stomping out the maxHeight attribute.
     */
    "& .MUIDataTable-responsiveScrollMaxHeight-313": {
      maxHeight: "calc(100vh - 400px) !important"
    }
  }
}));

export default function DatatableView(props) {
  const { data, columns, options } = props;

  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item>
        <MUIDataTable
          className={classes.root}
          title={"Ugly CSV prettified"}
          data={data}
          columns={columns}
          options={options}
        />
      </Grid>
    </Grid>
  );
}
