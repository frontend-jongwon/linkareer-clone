import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import BestPostTitle from "./components/BestPostTitle";
import BestPostTab from "./components/BestPostTab";

const BestPost = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <BestPostTitle />
      <BestPostTab />
    </Box>
  );
};

export default BestPost;

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    height: 390,
    padding: 2,
    border: "1px solid #dddddd",
  },
}));
