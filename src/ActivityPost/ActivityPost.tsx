import React from "react";
import ActivityPostTitle from "./ActivityPostTitle";
import ActivityPostContent from "./ActivityPostContent";
import ActivityPostTab from "./ActivityPostTab";
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
