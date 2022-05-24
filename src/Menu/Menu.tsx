import React, { useState } from "react";
import { Tab, Tabs, makeStyles } from "@material-ui/core";

const Menu = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
      className={classes.root}
      TabIndicatorProps={{
        style: {
          display: "none",
        },
      }}
    >
      <Tab label="공고 달력" disableRipple className={classes.tab} />
      <Tab label="커뮤니티" disableRipple className={classes.tab} />
      <Tab label="인턴" disableRipple className={classes.tab} />
      <Tab label="채용" disableRipple className={classes.tab} />
      <Tab label="대외활동" disableRipple className={classes.tab} />
      <Tab label="공모전" disableRipple className={classes.tab} />
      <Tab label="동아리" disableRipple className={classes.tab} />
      <Tab label="자소서 만능 검색기" disableRipple className={classes.tab} />
    </Tabs>
  );
};

export default Menu;

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    backgroundColor: "#01a0ff",
    paddingLeft: "28.6%",
    display: "flex",
    justifyContent: "center",
  },

  tab: {
    minWidth: "fit-content",
    color: "#bbe6ff",
    marginRight: 20,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: -0.64,
    "&.Mui-selected": {
      fontSize: 16,
      color: "#ffffff",
    },
  },
}));
