import React, { FC } from "react";
import Image from "next/image";
import logo from "../../../images/logo.png";
import { makeStyles } from "@material-ui/core";

const HeaderLogo: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Image src={logo} width={145} height={34} />
    </div>
  );
};

export default HeaderLogo;

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 145,
  },
}));
