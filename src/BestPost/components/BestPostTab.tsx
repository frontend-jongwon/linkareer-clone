import React, { useState, FC } from "react";
import { Tab, Tabs, makeStyles } from "@material-ui/core";
import TabPanel from "../../UtilComponents/TabPanel";
import BestPostList from "./BestPostList";

export type mockType = {
  id: number;
  desc: string;
  commentCount: number;
};

export type dataType = {
  realTime: mockType[];
  weekly: mockType[];
  monthly: mockType[];
  commentOrder: mockType[];
  likeOrder: mockType[];
};

interface BestPostTabProps {
  data: dataType;
}

const BestPostTab: FC<BestPostTabProps> = ({ data }) => {
  const [value, setValue] = useState(1);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  console.log(data);

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        TabIndicatorProps={{ style: { background: "#01A0FF" } }}
        variant="fullWidth"
        className={classes.tabs}
      >
        <Tab label="실시간" value={1} className={classes.tab} />
        <Tab label="주간" value={2} className={classes.tab} />
        <Tab label="월간" value={3} className={classes.tab} />
        <Tab label="댓글순" value={4} className={classes.tab} />
        <Tab label="추천순" value={5} className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={1}>
        {data && data.realTime.map((post) => <BestPostList post={post} />)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {data && data.weekly.map((post) => <BestPostList post={post} />)}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {data && data.monthly.map((post) => <BestPostList post={post} />)}
      </TabPanel>
      <TabPanel value={value} index={4}>
        {data && data.commentOrder.map((post) => <BestPostList post={post} />)}
      </TabPanel>
      <TabPanel value={value} index={5}>
        {data && data.likeOrder.map((post) => <BestPostList post={post} />)}
      </TabPanel>
    </div>
  );
};

export default BestPostTab;

const useStyles = makeStyles(() => ({
  root: {},

  tabs: {
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
