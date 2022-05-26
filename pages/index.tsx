import React from "react";
import Box from "@mui/material/Box";
import Header from "../src/Header/Header";
import { makeStyles, Container } from "@material-ui/core";
import Menu from "../src/Menu/Menu";
import ActivityPost from "../src/ActivityPost/ActivityPost";
import BestPost from "../src/BestPost/BestPost";

const activity = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Menu />
      <Box className={classes.wrapper}>
        <ActivityPost />
        <BestPost />
      </Box>
    </Box>
  );
};

export default activity;

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },

  wrapper: {
    padding: 0,
    border: "1px solid",
    // width: "fit-content",
    display: "flex",
    justifyContent: "center",
    paddingRight: 410,
  },
}));
