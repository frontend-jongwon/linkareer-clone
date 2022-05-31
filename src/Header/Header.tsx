import React, { FC } from "react";
import { makeStyles, Box } from "@material-ui/core";
import { HeaderLogo, HeaderSearch, HeaderTab, HeaderMenu } from "./components";

const Header: FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <HeaderLogo />
        <HeaderSearch />
        <HeaderTab />
      </div>
      <HeaderMenu />
    </>
  );
};

export default Header;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 410px",
  },
}));
