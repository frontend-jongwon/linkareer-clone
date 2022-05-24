import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import {
  NotificationsNone,
  EventAvailable,
  BookmarkBorder,
} from "@material-ui/icons";

const HeaderTab = () => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        <ListItem button className={classes.Item}>
          <EventAvailable className={classes.Icon} />
          <ListItemText
            primary="공고 달력"
            primaryTypographyProps={{
              style: { fontSize: 12, width: 46, marginRight: 35 },
            }}
          />
        </ListItem>
        <ListItem button className={classes.Item}>
          <NotificationsNone className={classes.Icon} />
          <ListItemText
            primary="알림"
            primaryTypographyProps={{ style: { fontSize: 12, width: 45 } }}
          />
        </ListItem>
        <ListItem button className={classes.Item}>
          <BookmarkBorder className={classes.Icon} />
          <ListItemText
            primary="스크랩"
            primaryTypographyProps={{
              style: { fontSize: 12, width: 45 },
            }}
          />
        </ListItem>
      </List>
      <ListItem className={classes.signin}>
        <ListItemText
          primary="개인회원"
          primaryTypographyProps={{
            style: {
              fontSize: 12,
              width: 44,
            },
          }}
        />
        <ListItemText
          primary="기업회원"
          primaryTypographyProps={{
            style: { fontSize: 12, width: 43, marginLeft: 30 },
          }}
        />
      </ListItem>
    </>
  );
};

export default HeaderTab;

const useStyles = makeStyles(() => ({
  root: {
    width: 206,
    height: 17,
    display: "flex",
    alignItems: "center",
  },
  Item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 17,
    color: "#333333",
    lineHeight: 2.33,
    letterSpacing: -0.48,
    padding: 0,
    "&:last-child::after": {
      content: '""',
      width: 1,
      height: 12,
      backgroundColor: "#dddddd",
      marginRight: 30,
    },
  },

  Icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },

  signin: {
    width: 146,
    // border: "1px solid",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "30px",
  },
}));
