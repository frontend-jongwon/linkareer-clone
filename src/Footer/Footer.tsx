import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { FooterList, FooterLogo } from "./components";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.ListLogoWrapper}>
        <FooterList />
        <FooterLogo />
      </Box>
    </div>
  );
};

export default Footer;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    border: "1px solid",
    alignItems: "center",
  },
  ListLogoWrapper: {
    display: "flex",
    border: "1px solid",
  },
}));
