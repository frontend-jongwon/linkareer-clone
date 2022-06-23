import React, { FC } from "react";
import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

interface BestPostLIstProps {
  post: {
    id: string;
    title: string;
    commentCount: number;
    url: string;
  };
  index: number;
}

const BestPostLIst: FC<BestPostLIstProps> = ({ post, index }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem className={classes.item}>
        <Typography className={classes.number}>{index + 1}</Typography>
        <ListItemText
          primaryTypographyProps={{
            style: {
              fontSize: 12,
              color: "#333333",
              width: "fit-content",
            },
          }}
          className={classes.text}
        >
          {post.title}
        </ListItemText>

        <Typography className={classes.count}>{post.commentCount}</Typography>
      </ListItem>
    </List>
  );
};

export default BestPostLIst;

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 5,
    marginLeft: 10,
    padding: 0,
    width: 265,
    maxWidth: 250,
    "&:first-child": {
      marginTop: 5,
    },
  },

  text: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: 0,
    height: 17,
  },

  item: {
    padding: 0,
    width: "fit-content",
    display: "flex",
    alignItems: "center",
  },

  number: {
    color: "#01a0ff",
    fontWeight: 800,
    fontSize: 13,
    marginRight: 5,
    marginBottom: 2,
  },

  count: {
    fontSize: 12,
    color: "#01a0ff",
    marginLeft: 5,
  },
}));
