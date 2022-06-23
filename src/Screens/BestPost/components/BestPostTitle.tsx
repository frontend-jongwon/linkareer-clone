import React, { FC } from "react";
import { Typography, Box, makeStyles } from "@material-ui/core";
import { ArrowForwardIos } from "@material-ui/icons";

const BestPostTitle: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        커뮤니티 BEST 이야기
      </Typography>
      <Box className={classes.buttonIconWrapper}>
        <Typography variant="button" className={classes.button}>
          더 보기
        </Typography>
        <ArrowForwardIos className={classes.icon} />
      </Box>
    </div>
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
    fontSize: 15.5,
    fontWeight: 800,
    letterSpacing: -0.48,
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
