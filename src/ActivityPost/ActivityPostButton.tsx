import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { Bookmark } from "@material-ui/icons";

const ActivityPostButton = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Button className={classes.apply}>홈페이지 지원</Button>
      <Button className={classes.bookmark}>
        <Box className={classes.bookmarkIconWrapper}>
          <Bookmark className={classes.icon} />
          <Typography variant="h6" className={classes.count}>
            8
          </Typography>
        </Box>
      </Button>
    </Box>
  );
};

export default ActivityPostButton;

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: 50,
    width: "fit-content",
  },
  apply: {
    width: 180,
    height: 55,
    backgroundColor: "#01a0ff",
    borderRadius: 0,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 600,
    marginRight: 12,
  },
  bookmark: {
    width: 56,
    height: 56,
    border: "1px solid #dddddd",
    borderRadius: 0,
  },
  icon: {
    color: "#dddddd",
    width: 28,
    height: 30,
  },
  count: {
    fontSize: 12,
    fontWeight: 600,
    color: "#bbbbbb",
  },

  bookmarkIconWrapper: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },
}));
