import React, { useState } from "react";
import { Tab, Tabs, makeStyles } from "@material-ui/core";

const Menu = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="공고 달력" />
      <Tab label="커뮤니티" />
      <Tab label="인턴" />
      <Tab label="채용" />
      <Tab label="대외활동" />
      <Tab label="공모전" />
      <Tab label="동아리" />
      <Tab label="자소서 만능 검색기" />
    </Tabs>
  );
};

export default Menu;
