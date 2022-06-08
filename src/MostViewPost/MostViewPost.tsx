import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { MostViewPostTitle, MostViewPostList } from "./components";
import { gql, useQuery } from "@apollo/client";

const ACTIVITY_POST = gql`
  query Activity($activityId: ID!) {
    activity(id: $activityId) {
      id
      activityTypeID
      interests {
        id
        name
      }
      categories {
        id
        name
      }
    }
  }
`;

const MostViewPost: FC = () => {
  const { data, error, loading } = useQuery(ACTIVITY_POST, {
    variables: {
      activityId: "90182",
    },
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MostViewPostTitle />
      <MostViewPostList post={data?.activity} />
    </div>
  );
};

export default MostViewPost;

const useStyles = makeStyles(() => ({
  root: {
    border: "1px solid #dddddd",
    display: "flex",
    padding: 22,
    flexDirection: "column",
    marginBottom: 140,
  },
}));
