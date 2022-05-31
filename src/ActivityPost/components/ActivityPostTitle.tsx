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

const ActivityPostTitle: FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box className={classes.textBox}>모집시 마감(D-82)</Box>
      <Box className={classes.rowText}>
        <Typography variant="h5" className={classes.title}>
          [Tridge] 해외영업 및 무역 인턴십 (중화권 마켓, 3개월 전환형)
        </Typography>
        <List className={classes.viewCommentWrapper}>
          <ListItem className={classes.viewCommentItem}>
            <VisibilityOutlined className={classes.icon} />
            <ListItemText
              primary="214"
              primaryTypographyProps={{
                style: { fontSize: 12, marginLeft: 5 },
              }}
            />
          </ListItem>
          <ListItem className={classes.viewCommentItem}>
            <ChatBubbleOutline className={classes.icon} />
            <ListItemText
              primary="0"
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
    padding: "5px 10px 5px 10px",
    fontWeight: 700,
  },

  title: {
    color: "#363636",
    fontWeight: 700,
    marginRight: 100,
    fontSize: 28,
  },

  rowText: {
    display: "flex",
    alignItems: "center",
  },

  viewCommentWrapper: {
    width: "fit-content",
    display: "flex",
    color: "#808080",
  },

  icon: {
    width: 16,
    height: 16,
  },

  viewCommentItem: {},
}));
