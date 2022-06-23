import React, { FC } from "react";
import {
  Typography,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { VisibilityOutlined, ChatBubbleOutline } from "@material-ui/icons";
import { differenceInCalendarDays } from "date-fns";

interface ActivityPostTitleProps {
  activityTitle: string;
  activityViewCount: number;
  activityReplyCount: number;
  activityRecruitCloseAt: Date;
}

const ActivityPostTitle: FC<ActivityPostTitleProps> = ({
  activityTitle,
  activityViewCount,
  activityReplyCount,
  activityRecruitCloseAt,
}) => {
  const classes = useStyles();
  const recruitCloseAt = differenceInCalendarDays(
    activityRecruitCloseAt,
    new Date()
  );

  return (
    <Container className={classes.root}>
      <Box className={classes.textBox}>D-{recruitCloseAt}</Box>
      <Box className={classes.rowText}>
        <Typography variant="h5" className={classes.title}>
          {activityTitle}
        </Typography>
        <List className={classes.viewCommentWrapper}>
          <ListItem className={classes.viewCommentItem}>
            <VisibilityOutlined className={classes.icon} />
            <ListItemText
              primary={`${activityViewCount}`}
              primaryTypographyProps={{
                style: { fontSize: 12, marginLeft: 5 },
              }}
            />
          </ListItem>
          <ListItem className={classes.viewCommentItem}>
            <ChatBubbleOutline className={classes.icon} />
            <ListItemText
              primary={`${activityReplyCount}`}
              primaryTypographyProps={{
                style: { fontSize: 12, marginLeft: 5 },
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default ActivityPostTitle;

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },

  textBox: {
    backgroundColor: "#4a5f6e",
    color: "#ffffff",
    width: "fit-content",
    padding: "4px 8px 3px 8px",
    fontWeight: 700,
    fontSize: 15,
  },

  title: {
    color: "#363636",
    fontWeight: 700,
    marginRight: 100,
    fontSize: 29,
  },

  rowText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  viewCommentWrapper: {
    width: "fit-content",
    display: "flex",
    color: "#808080",
  },

  icon: {
    width: 16,
    height: 16,
    color: "#bbbbbb",
  },

  viewCommentItem: {},
}));
