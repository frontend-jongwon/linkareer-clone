import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { MostViewPostTitle, MostViewPostList } from "./components";

const MostViewPost = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MostViewPostTitle />
      <MostViewPostList />
    </div>
  );
};

export default MostViewPost;

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid #dddddd",
    display: "flex",
    padding: 22,
    flexDirection: "column",
    marginBottom: 140,
  },
}));
