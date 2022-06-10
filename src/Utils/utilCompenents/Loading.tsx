import React from "react";
import { makeStyles, Box, CircularProgress } from "@material-ui/core";

const Loading = () => {
  const classes = useStyles();
  return (
    <Box className={classes.loading}>
      <CircularProgress style={{ color: "#01a0ff" }} />
    </Box>
  );
};

export default Loading;

const useStyles = makeStyles(() => ({
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
}));
