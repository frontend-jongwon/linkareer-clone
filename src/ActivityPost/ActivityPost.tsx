import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import {
  ActivityPostTitle,
  ActivityPostContent,
  ActivityPostTab,
} from "./components";

const ActivityPost = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <ActivityPostTitle />
      <ActivityPostContent />
      <ActivityPostTab />
    </Container>
  );
};

export default ActivityPost;

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    width: "fit-content",
    // border: "1px solid",
  },
}));
