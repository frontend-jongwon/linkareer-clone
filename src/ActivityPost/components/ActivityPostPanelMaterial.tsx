import { Box, List, Typography, ListItem } from "@material-ui/core";
import {
  ArrowForwardIosOutlined,
  MessageOutlined,
  RemoveRedEyeOutlined,
  ChatBubbleOutlineOutlined,
} from "@material-ui/icons";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";

const ActivityPostPanelMaterial: FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Box>
        <MessageOutlined />
        <Typography>추천 합격자료</Typography>
        <Typography>더보기 </Typography>
        <ArrowForwardIosOutlined />
      </Box>
      <Box>
        <Typography>
          2019 하반기 주택도시보증공사 면접후기 "다대다-면접-1분 자기소개,
          지원동기 질문"
        </Typography>
        <Box>
          지원한 회사에 대한 정보를 작성해주세요! ▶ 지원시기 : 2019 하반기 ▶
          지원회사 : 주택도시보증공사 ▶ 지원부서 : 행정 ▶ 스펙 : 토익, 사조사,
          컴활 ▶ 면접일자 & 시간 : 하반기 ▶ 면접 유형 : 다대다 기억나는 면접질문
          & 답변 1. 1분자기소개 2.지원동기 3.허그 상품 소개를 쉽고 간결하게
          하자면? 자유로운 면접후기 면접은 1분 자기소개...
        </Box>
        <List>
          <ListItem>2020.02.17</ListItem>
          <ListItem>
            <RemoveRedEyeOutlined />
            <Typography>1091</Typography>
          </ListItem>
          <ListItem>
            <ChatBubbleOutlineOutlined />
            <Typography>0</Typography>
          </ListItem>
        </List>
      </Box>
    </div>
  );
};

export default ActivityPostPanelMaterial;

const useStyles = makeStyles(() => ({}));
