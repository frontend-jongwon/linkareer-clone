import React from "react";
import {
  Box,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";

const FooterList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        <Typography className={classes.title}>링커리어</Typography>
        <List className={classes.list}>
          <ListItem className={classes.item}>• 링커리어 소개</ListItem>
          <ListItem className={classes.item}>• 공지사항</ListItem>
          <ListItem className={classes.item}>• 채용</ListItem>
          <ListItem className={classes.item}>• 회사 공지사항</ListItem>
        </List>
      </Box>
      <Box className={classes.content}>
        <Typography className={classes.title}>고객문의</Typography>
        <List className={classes.list}>
          <ListItem className={classes.item}>• 광고 및 제휴 문의</ListItem>
          <ListItem className={classes.item}>• 고객문의</ListItem>
          <ListItem className={classes.item}>• FAQ</ListItem>
        </List>
      </Box>
      <Box className={classes.content}>
        <Typography className={classes.title}>이용안내</Typography>
        <List className={classes.list}>
          <ListItem className={classes.item}>• 이용약관</ListItem>
          <ListItem className={classes.item}>• 개인정보처리방침</ListItem>
        </List>
      </Box>
      <Box className={classes.content}>
        <Typography className={classes.title}>연관 서비스</Typography>
        <Box className={classes.service}>
          <List className={classes.serviceList}>
            <ListItem className={classes.item}>• 대외활동봇</ListItem>
            <ListItem className={classes.item}>• 공모전봇</ListItem>
            <ListItem className={classes.item}>• 채용봇</ListItem>
            <ListItem className={classes.item}>• 자소서복</ListItem>
          </List>
          <List className={classes.serviceList}>
            <ListItem className={classes.item}>• 맞춤공고</ListItem>
            <ListItem className={classes.item}>• 공고달력</ListItem>
            <ListItem className={classes.item}>• 블로그</ListItem>
            <ListItem className={classes.item}>• 포스트</ListItem>
          </List>
          <List className={classes.serviceList}>
            <ListItem className={classes.item}>• 스펙업</ListItem>
            <ListItem className={classes.item}>• 대외활동 뭐하지</ListItem>
            <ListItem className={classes.item}>• 공모전 뭐하지</ListItem>
          </List>
        </Box>
      </Box>
    </div>
  );
};

export default FooterList;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  content: {
    marginRight: 100,
  },
  title: {
    color: "#333333",
    fontSize: 12,
    fontWeight: 800,
    marginBottom: 10,
  },
  list: {
    padding: 0,
  },

  serviceList: {
    padding: 0,
    marginRight: 60,
  },
  item: {
    color: "#333333",
    fontSize: 12,
    fontWeight: 600,
    padding: 0,
    marginBottom: 4,
  },
  service: {
    display: "flex",
  },
}));
