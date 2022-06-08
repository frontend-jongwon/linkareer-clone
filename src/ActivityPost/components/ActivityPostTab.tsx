import React, { FC } from "react";
import { Tabs, Tab, makeStyles, Box, Typography } from "@material-ui/core";
import TabPanel from "../../Utils/TabPanel";

interface ActivityPostTabProps {
  activityText: {
    id: string;
    text: string;
  };
}

const ActivityPostTab: FC<ActivityPostTabProps> = ({ activityText }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  // console.log(JSON.parse(activityText?.text));

  const createMarkup = () => {
    return {
      __html: activityText?.text,
    };
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
        <Typography className={classes.title}>상세내용</Typography>
        <div
          dangerouslySetInnerHTML={createMarkup()}
          className={classes.info}
        ></div>
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
    marginBottom: 42,
  },

  tab: {
    color: "#333333",
    fontSize: 15,
    fontWeight: 700,
    "&.Mui-selected": {
      color: "#01A0FF",
    },
  },

  info: {
    "& img": {
      width: 926,
    },
  },

  title: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 21,
    fontWeight: 800,
  },

  panel: {},
}));
