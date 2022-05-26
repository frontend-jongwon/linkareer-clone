import React, { FC } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";

interface TabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ActivityPostTab = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      {/* <AppBar position="static"> */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        TabIndicatorProps={{ style: { background: "#01A0FF", height: 3 } }}
        textColor="primary"
        className={classes.tabs}
        variant="fullWidth"
      >
        <Tab className={classes.tab} label="상세내용" {...a11yProps(0)} />
        <Tab className={classes.tab} label="합격자료" {...a11yProps(1)} />
        <Tab className={classes.tab} label="담당자Q&A" {...a11yProps(2)} />
      </Tabs>
      {/* </AppBar> */}
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

const useStyles = makeStyles((theme) => ({
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
