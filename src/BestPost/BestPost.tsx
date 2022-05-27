import React, { useState } from "react";
import { Box, makeStyles } from "@material-ui/core";
import BestPostTitle from "./components/BestPostTitle";
import BestPostTab from "./components/BestPostTab";
import BestPostList from "./components/BestPostList";

const mockData = {
  realTime: [
    {
      id: 1,
      desc: "이래서 머기업을 가려고 하나봐",
      commentCount: 13,
    },
    {
      id: 2,
      desc: "대기업이 말하는 '학벌 안봐요'의 뜻 ",
      commentCount: 21,
    },
  ],
  weekly: [
    {
      id: 1,
      desc: "여자들아 너네 이런 커플 뭔생각들어?",
      commentCount: 10,
    },
    {
      id: 2,
      desc: "해피무프 합 또는 불합하신 분들",
      commentCount: 5,
    },
  ],
  monthly: [
    {
      id: 1,
      desc: "베라 로고 바꾼거 어때???",
      commentCount: 12,
    },
    {
      id: 2,
      desc: "요즘 취준 요약",
      commentCount: 5,
    },
  ],
  commentOrder: [
    {
      id: 1,
      desc: "이젠 알바때문에 취업도 못함",
      commentCount: 33,
    },
    {
      id: 2,
      desc: "배민 이건 이해 못하겠다",
      commentCount: 1,
    },
  ],
  likeOrder: [
    {
      id: 1,
      desc: "베라 로고 바꾼거 어때???",
      commentCount: 16,
    },
    {
      id: 2,
      desc: "아니 이거 미친거 아니냐",
      commentCount: 12,
    },
  ],
};

const BestPost = () => {
  const classes = useStyles();
  const [data, setData] = useState(mockData);
  return (
    <Box className={classes.root}>
      <BestPostTitle />
      <BestPostTab data={data} />
    </Box>
  );
};

export default BestPost;

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    height: 390,
    padding: 2,
    border: "1px solid #dddddd",
  },
}));
