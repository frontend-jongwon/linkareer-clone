import React, { useState } from "react";
import { Tab, Tabs, makeStyles } from "@material-ui/core";

const BestPostTab = () => {
  const [value, setValue] = useState(1);
  const classes = useStyles();

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
      TabIndicatorProps={{ style: { background: "#01A0FF" } }}
      variant="fullWidth"
      className={classes.root}
    >
      <Tab label="실시간" value={1} className={classes.tab} />
      <Tab label="주간" value={2} className={classes.tab} />
      <Tab label="월간" value={3} className={classes.tab} />
      <Tab label="댓글순" value={4} className={classes.tab} />
      <Tab label="추천순" value={5} className={classes.tab} />
    </Tabs>
  );
};

export default BestPostTab;

const useStyles = makeStyles(() => ({
  root: {
    display: "inline-flex",
    padding: 0,
    borderTop: "1.5px solid #dddddd",
    borderBottom: "1.5px solid #dddddd",
    height: 0,
    minHeight: 36,
    marginLeft: 8,
  },

  tab: {
    width: "100%",
    minWidth: 55,
    padding: 0,
    minHeight: 36,
    fontWeight: 400,
    color: "#333333",
    fontSize: 12,
    "&.Mui-selected": {
      color: "#01A0FF",
    },
  },
}));
