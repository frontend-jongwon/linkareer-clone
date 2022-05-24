import React from "react";
import Box from "@mui/material/Box";
import Header from "../src/Header/Header";
import { makeStyles } from "@material-ui/core";
import Menu from "../src/Menu/Menu";

const activity = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Menu />
    </Box>
  );
};

export default activity;

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
  },
}));
