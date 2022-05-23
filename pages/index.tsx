import React from "react";
import Box from "@mui/material/Box";
import Header from "../src/Header/Header";
import { makeStyles } from "@material-ui/core";

const activity = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
    </Box>
  );
};

export default activity;

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    // border: "1px solid",
  },
}));
