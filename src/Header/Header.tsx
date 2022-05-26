import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import HeaderLogo from "./components/HeaderLogo";
import HeaderSearch from "./components/HeaderSearch";
import HeaderTab from "./components/HeaderTab";

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderTab />
    </Box>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid",
    padding: "30px 410px",
  },
}));
