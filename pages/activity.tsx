import React, { FC } from "react";
import Box from "@mui/material/Box";
import Header from "../src/Screens/Header/screen/Header";
import { makeStyles } from "@material-ui/core";
import { ActivityPost } from "../src/Screens/ActivityPost/screen";
import { BestPost } from "../src/Screens/BestPost/screen";
import { MostViewPost } from "../src/Screens/MostViewPost/screen";
import { Footer } from "../src/Screens/Footer/screen";

const Activity: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Box className={classes.wrapper}>
        <Box>
          <ActivityPost />
          <MostViewPost />
        </Box>
        <BestPost />
      </Box>
      <Footer />
    </div>
  );
};

export default Activity;

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },

  wrapper: {
    padding: 0,
    borderBottom: "1px solid #dddddd",
    display: "flex",
    justifyContent: "center",
  },
}));
