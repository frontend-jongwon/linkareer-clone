import React from "react";
import ActivityPostTitle from "./components/ActivityPostTitle";
import ActivityPostContent from "./components/ActivityPostContent";
import ActivityPostTab from "./components/ActivityPostTab";
import { makeStyles, Container } from "@material-ui/core";

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
