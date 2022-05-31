import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { HeaderLogo, HeaderSearch, HeaderTab } from "./components";

const Header: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderTab />
    </div>
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
