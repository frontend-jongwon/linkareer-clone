import React, { FC, useState } from "react";
import { makeStyles, Container } from "@material-ui/core";
import {
  ActivityPostTitle,
  ActivityPostContent,
  ActivityPostTab,
} from "../components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Loading } from "../../Utils/utilCompenents";
import { ActivityPost_item_Fragment } from "../../graphql/graphql";

const ACTIVITY_POST = gql`
  ${ActivityPost_item_Fragment}
  query Activity($activityId: ID!) {
    activity(id: $activityId) {
      ...ActivityPost_item
      id
      title
      texts {
        id
        text
      }
      logoImage {
        id
        url
      }
      viewCount
      replyCount
      scrapCount
    }
  }
`;

const ActivityPost: FC = () => {
  const classes = useStyles();

  const { data, error, loading } = useQuery(ACTIVITY_POST, {
    variables: { activityId: "90182" },
  });

  const [activityTab, setActivityTab] = useState(0);

  const handleTabChange = (value: number) => {
    setActivityTab(value);
  };

  const activity = data?.activity;

  return (
    <>
      {loading && <Loading />}
      <Container className={classes.root}>
        <ActivityPostTitle
          activityTitle={activity?.title}
          activityViewCount={activity?.viewCount}
          activityReplyCount={activity?.replyCount}
          activityRecruitCloseAt={activity?.recruitCloseAt}
        />
        <ActivityPostContent activityPostItem={activity} />
        <ActivityPostTab
          activityText={activity?.texts[0]}
          activityTypeID={activity?.activityTypeID}
          activityTitle={activity?.title}
          activityTab={activityTab}
          onTabChange={handleTabChange}
        />
      </Container>
    </>
  );
};

export default ActivityPost;

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
}));
