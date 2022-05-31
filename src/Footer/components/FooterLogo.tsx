import React, { FC } from "react";
import footerLogoImg from "../../../images/footerLogoImg.png";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";

const FooterLogo: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Image src={footerLogoImg} width={128} height={30} />
    </div>
  );
};

export default FooterLogo;

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 10,
    padding: 0,
    height: "fit-content",
  },
}));
