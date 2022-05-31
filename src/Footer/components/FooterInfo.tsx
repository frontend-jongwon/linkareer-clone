import React from "react";
import { makeStyles, Typography, List, ListItem } from "@material-ui/core";

const FooterInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List className={classes.infoWrapper}>
        <ListItem className={classes.info}>
          사업자 등록번호 : 634-81-01835
        </ListItem>
        <ListItem className={classes.info}>
          직업정보제공 사업신고번호 : J1200020210023
        </ListItem>
        <ListItem className={classes.info}>
          통신판매업 신고번호 : 제 2021-서울강남-06547 호
        </ListItem>
        <ListItem className={classes.info}>
          (주)링커리어 대표이사 : 노은돈
        </ListItem>
        <ListItem className={classes.info}>
          서울특별시 강남구 역삼로 136 (신명빌딩, 6층)
        </ListItem>
      </List>

      <Typography className={classes.copyright}>
        Copyright © <b>Linkareer</b>. All Rights Reserved.
      </Typography>
    </div>
  );
};

export default FooterInfo;

const useStyles = makeStyles(() => ({
  root: {},
  infoWrapper: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
  info: {
    padding: 0,
    fontSize: 12,
    color: "#999999",
    width: "fit-content",
    fontWeight: 600,
    letterSpacing: -0.3,
  },
  copyright: {
    fontSize: 12,
    color: "#999999",
    fontWeight: 600,
    marginTop: 5,
  },
}));
