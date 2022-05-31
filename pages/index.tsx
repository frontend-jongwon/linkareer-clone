import React, { FC } from "react";
import Box from "@mui/material/Box";
import Header from "../src/Header/Header";
import { makeStyles } from "@material-ui/core";
import Menu from "../src/Header/components/HeaderMenu";
import ActivityPost from "../src/ActivityPost/ActivityPost";
import BestPost from "../src/BestPost/BestPost";
import MostViewPost from "../src/MostViewPost/MostViewPost";
import Footer from "../src/Footer/Footer";

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
    // width: "fit-content",
    display: "flex",
    justifyContent: "center",
  },
}));
