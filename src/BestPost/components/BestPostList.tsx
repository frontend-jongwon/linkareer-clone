import React, { FC } from "react";
import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

type postType = {
  id: number;
  desc: string;
  commentCount: number;
};

interface BestPostLIstProps {
  post: postType;
}

const BestPostLIst: FC<BestPostLIstProps> = ({ post }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem className={classes.item}>
        <ListItemText
          primaryTypographyProps={{
            style: {
              fontSize: 12,
              color: "#333333",
              width: "fit-content",
            },
          }}
        >
          {post.id} {post.desc}
        </ListItemText>
        <Typography className={classes.count}>{post.commentCount}</Typography>
      </ListItem>
    </List>
  );
};

export default BestPostLIst;

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 2,
    marginLeft: 10,
    padding: 0,
  },

  item: {
    padding: 0,
    width: "fit-content",
  },

  count: {
    fontSize: 12,
    color: "#01a0ff",
    marginLeft: 5,
  },
}));
