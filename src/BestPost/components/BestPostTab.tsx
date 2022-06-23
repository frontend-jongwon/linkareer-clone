import React, { useState, FC, useEffect } from "react";
import { Tab, Tabs, makeStyles } from "@material-ui/core";
import TabPanel from "../../Utils/utilCompenents/TabPanel";
import BestPostList from "./BestPostList";
import { useQuery, gql } from "@apollo/client";
import { BestPostType } from "../../Utils/enums";
import { PostType } from "../../Utils/types";
import clsx from "clsx";
import { Loading } from "../../Utils/utilCompenents";

const BEST_POST_DATA = gql`
  query CommunityBestPostList($input: CommunityBestPostListInput!) {
    communityBestPostList(input: $input) {
      data
    }
  }
`;

const BestPostTab: FC = () => {
  const [bestPostOrder, setBestPostOrder] = useState<BestPostType>(
    BestPostType.recent
  );

  const { data, loading, error } = useQuery(BEST_POST_DATA, {
    variables: {
      input: {
        type: bestPostOrder,
        pagination: {
          page: 1,
          pageSize: 10,
        },
      },
    },
  });

  const bestPostList = data?.communityBestPostList.data.bestPosts;

  const classes = useStyles();

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: BestPostType
  ) => {
    setBestPostOrder(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={bestPostOrder}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        TabIndicatorProps={{ style: { background: "#01A0FF" } }}
        variant="fullWidth"
        className={classes.tabs}
      >
        <Tab
          label="실시간"
          value={BestPostType.recent}
          className={clsx(classes.tab, {
            [classes.selected]: bestPostOrder === BestPostType.recent,
          })}
        />
        <Tab
          label="주간"
          value={BestPostType.lastWeek}
          className={clsx(classes.tab, {
            [classes.selected]: bestPostOrder === BestPostType.lastWeek,
          })}
        />
        <Tab
          label="월간"
          value={BestPostType.lastMonth}
          className={clsx(classes.tab, {
            [classes.selected]: bestPostOrder === BestPostType.lastMonth,
          })}
        />
        <Tab
          label="댓글순"
          value={BestPostType.replyCount}
          className={clsx(classes.tab, {
            [classes.selected]: bestPostOrder === BestPostType.replyCount,
          })}
        />
        <Tab
          label="추천순"
          value={BestPostType.voteCount}
          className={clsx(classes.tab, {
            [classes.selected]: bestPostOrder === BestPostType.voteCount,
          })}
        />
      </Tabs>
      <TabPanel value={bestPostOrder} index={bestPostOrder}>
        {loading && <Loading />}
        {bestPostList &&
          bestPostList.map((post: PostType, index: number) => (
            <BestPostList post={post} index={index} key={post.id} />
          ))}
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
    height: 0,
    minHeight: 34,
    margin: "0 8px 0 8px",
  },

  tab: {
    minWidth: 54,
    padding: 0,
    minHeight: 34,
    fontWeight: 500,
    color: "#333333",
    fontSize: 12,
    borderTop: "1.5px solid #eeeeee",
    borderBottom: "1.5px solid #eeeeee",
  },

  selected: {
    color: "#01A0FF",
  },
}));
