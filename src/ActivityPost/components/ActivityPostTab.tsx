import React, { FC } from "react";
import { Tabs, Tab, makeStyles } from "@material-ui/core";
import TabPanel from "../../Utils/TabPanel";

const ActivityPostTab: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        TabIndicatorProps={{ style: { background: "#01A0FF", height: 3 } }}
        textColor="primary"
        className={classes.tabs}
        variant="fullWidth"
      >
        <Tab className={classes.tab} label="상세내용" />
        <Tab className={classes.tab} label="합격자료" />
        <Tab className={classes.tab} label="담당자Q&A" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

export default ActivityPostTab;

const useStyles = makeStyles(() => ({
  root: {},

  tabs: {
    backgroundColor: "#ffffff",
    display: "inline-flex",
    width: "100%",
    padding: 0,
    borderBottom: "1.5px solid #dddddd",
  },

  tab: {
    color: "#333333",
    fontSize: 15,
    fontWeight: 700,
    "&.Mui-selected": {
      color: "#01A0FF",
    },
  },
}));
