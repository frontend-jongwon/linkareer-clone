import React, { useState, FC } from "react";
import { makeStyles, Box } from "@material-ui/core";
import { BestPostTitle, BestPostTab } from "./components";

const BestPost: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.list}>
        <BestPostTitle />
        <BestPostTab />
      </Box>
    </div>
  );
};

export default BestPost;

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    padding: 2,
    marginLeft: 70,
    position: "relative",
  },

  list: {
    position: "fixed",
    height: 390,
    border: "1px solid #dddddd",
    padding: 5,
  },
}));
