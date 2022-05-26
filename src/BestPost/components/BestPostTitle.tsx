import React from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";

const BestPostTitle = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        커뮤니티 BEST 이야기
      </Typography>
      <Box className={classes.buttonIconWrapper}>
        <Typography variant="button" className={classes.button}>
          더 보기
        </Typography>
        <ArrowForwardIos className={classes.icon} />
      </Box>
    </Box>
  );
};

export default BestPostTitle;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: "8px 10px",
  },

  title: {
    fontSize: 15,
    fontWeight: 700,
  },
  buttonIconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    fontSize: 12,
    color: "#555555",
    marginRight: 2,
  },

  icon: {
    width: 15,
    height: 15,
    color: "#bbbbbb",
  },
}));
