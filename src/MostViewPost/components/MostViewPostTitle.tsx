import React from "react";
import { VisibilityOutlined } from "@material-ui/icons";
import { makeStyles, Typography } from "@material-ui/core";

const MostViewPostTitle = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <VisibilityOutlined className={classes.icon} />
      <Typography className={classes.title}>
        이 공고 조회자가 많이 본 공고
      </Typography>
    </div>
  );
};

export default MostViewPostTitle;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
  },

  icon: {
    fontSize: 18,
    color: "#808080",
  },

  title: {
    marginLeft: 9,
    fontSize: 18,
    color: "#333333",
    fontWeight: 700,
  },
}));
