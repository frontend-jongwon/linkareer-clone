import React, { FC } from "react";
import { makeStyles, Container } from "@material-ui/core";
import {
  ActivityPostTitle,
  ActivityPostContent,
  ActivityPostTab,
} from "./components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const ACTIVITY_POST = gql`
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
    }
  }

  fragment ActivityPost_item on Activity {
    thumbnailImage {
      id
      url
    }
    activityTypeID
    organizationName
    organizationType
    createdAt
    homepageURL
    regionDistricts {
      id
      name
      region {
        id
        name
      }
    }
    categories {
      id
      name
    }
    jobTypes
    recruitCloseAt
  }
`;

const ActivityPost: FC = () => {
  const classes = useStyles();

  const { data, error, loading } = useQuery(ACTIVITY_POST, {
    variables: { activityId: "90182" },
  });

  const activity = data?.activity;

  return (
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
      />
    </Container>
  );
};

export default ActivityPost;

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
}));
