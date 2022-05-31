import React, { FC } from "react";
import { makeStyles, Box, Typography, List, ListItem } from "@material-ui/core";
import { BookmarkOutlined } from "@material-ui/icons";
import Image from "next/image";
import kakaoStyle from "../../../images/kakaoStyle.png";

const MostViewPostList: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.content}>
        <Box className={classes.iconCountRight}>
          <Box className={classes.iconCountWrapper}>
            <BookmarkOutlined className={classes.icon} />
            <Typography className={classes.count}>79</Typography>
          </Box>
        </Box>
        <Box>
          <Image src={kakaoStyle} width={171} height={60} />
        </Box>
        <Box className={classes.comment}>
          <Typography className={classes.text}>담당자 답변받기</Typography>
        </Box>
      </Box>
      <Box>
        <Typography className={classes.title}>
          지그재그 콘텐츠 운영 인턴
        </Typography>
        <Typography className={classes.subTitle}>카카오스타일</Typography>
        <List className={classes.desc}>
          <ListItem className={classes.detail}>D-15</ListItem>
          <ListItem className={classes.detail}>조회 4,142</ListItem>
          <ListItem className={classes.detail}>댓글 0</ListItem>
        </List>
      </Box>
    </div>
  );
};

export default MostViewPostList;

const useStyles = makeStyles(() => ({
  root: {
    width: "fit-content",
    padding: "22px 0 22px 0",
  },

  content: {
    width: 171,
    height: 171,
    display: "flex",
    flexDirection: "column",
    border: "1px solid #dddddd",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  iconCountRight: {
    display: "flex",
    justifyContent: "flex-end",
  },

  iconCountWrapper: {
    backgroundColor: "#333333",
    color: "#ffffff",
    width: 39,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    margin: "5px 5px 0 0",
  },

  icon: {
    fontSize: 15,
    marginRight: 3,
  },
  count: {
    fontSize: 12,
  },

  comment: {
    backgroundColor: "#333333",
    color: "#ffffff",
    width: "fit-content",
    borderRadius: 2,
    margin: "0 0 5px 5px",
  },

  text: {
    fontSize: 11,
    padding: 6,
    fontWeight: 500,
  },

  title: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 10,
    fontWeight: 800,
  },
  subTitle: {
    fontSize: 12,
    color: "#333333",
    marginBottom: 10,
    fontWeight: 600,
  },

  desc: {
    display: "flex",
    padding: 0,
  },

  detail: {
    color: "#999999",
    fontSize: 12,
    padding: 0,
    width: "fit-content",
    marginRight: 10,
  },
}));
