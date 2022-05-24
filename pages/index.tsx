import React from "react";
import Box from "@mui/material/Box";
import Header from "../src/Header/Header";
import { makeStyles, Container } from "@material-ui/core";
import Menu from "../src/Menu/Menu";
import ActivityPost from "../src/ActivityPost/ActivityPost";

const activity = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Menu />
      <Container className={classes.wrapper} fixed>
        <ActivityPost />
      </Container>
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
  },

  wrapper: {
    padding: 0,
    border: "1px solid",
  },
}));
