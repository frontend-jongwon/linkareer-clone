import React, { useState, FC } from "react";
import { Tab, Tabs, makeStyles } from "@material-ui/core";

const HeaderMenu: FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        className={classes.tabs}
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
    </div>
  );
};

export default HeaderMenu;

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#01a0ff",
    display: "flex",
    justifyContent: "center",
    marginBottom: 90,
  },

  tabs: {
    marginRight: 380,
    padding: "5px 0 2px 0",
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
      fontWeight: 800,
    },
  },
}));
