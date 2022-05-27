import React from "react";
import Image from "next/image";
import logo from "../../../images/logo.png";

const HeaderLogo = () => {
  return <Image src={logo} width={145} height={34} />;
};

export default HeaderLogo;
