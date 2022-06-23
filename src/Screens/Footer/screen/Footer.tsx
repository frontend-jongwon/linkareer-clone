import { Box, makeStyles } from "@material-ui/core";
import React, { FC } from "react";
import { FooterList, FooterLogo, FooterInfo } from "../components";

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <Box className={classes.ListLogoWrapper}>
          <FooterList />
          <FooterLogo />
        </Box>
        <FooterInfo />
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
    alignItems: "center",
    padding: "30px 0 130px 0",
  },
  ListLogoWrapper: {
    display: "flex",
  },
}));
