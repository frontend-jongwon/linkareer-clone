import React from "react";
import Image from "next/image";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Link from "next/link";

const ActivityPostContent = () => {
  const myLoader = () => {
    return `https://res.cloudinary.com/linkareer/image/fetch/f_auto/https://api.linkareer.com/attachments/96766`;
  };

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.image}>
        <Image
          loader={myLoader}
          src="contentImage.png"
          width={245}
          height={245}
        />
      </Box>
      <Box>
        <Typography variant="h6" className={classes.title}>
          Tridge
        </Typography>
        <Box className={classes.row}>
          <List className={classes.content}>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#4990e2",
                    marginRight: 30,
                  },
                }}
              >
                기업형태
              </ListItemText>
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: 15, fontWeight: 400 },
                }}
              >
                스타트업
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#4990e2",
                    marginRight: 30,
                  },
                }}
              >
                모집직무
              </ListItemText>
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: 15, fontWeight: 400 },
                }}
              >
                무역/유통
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#4990e2",
                    marginRight: 30,
                  },
                }}
              >
                채용형태
              </ListItemText>
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: 15, fontWeight: 400 },
                }}
              >
                인턴
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#4990e2",
                    marginRight: 30,
                  },
                }}
              >
                근무지역
              </ListItemText>
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: 15, fontWeight: 400 },
                }}
              >
                서울 강남구, 서초구
              </ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#4990e2",
                    marginRight: 30,
                  },
                }}
              >
                접수기간
              </ListItemText>
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: 15, fontWeight: 400 },
                }}
              >
                22.5.16 ~ 모집시 마감
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#4990e2",
                    marginRight: 30,
                  },
                }}
              >
                채용인원
              </ListItemText>
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: 15, fontWeight: 400 },
                }}
              >
                0명
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#4990e2",
                    marginRight: 30,
                  },
                }}
              >
                홈페이지
              </ListItemText>
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: 15, fontWeight: 400 },
                }}
              >
                <Link href="">https://www.tridge.com</Link>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default ActivityPostContent;

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    marginTop: 10,
    marginLeft: 15,
    width: "fit-content",
  },

  row: {
    display: "flex",
  },

  image: {
    border: "1px solid #dddddd",
    width: "fit-content",
  },

  title: {
    color: "#333333",
    fontWeight: 600,
    fontSize: 18,
    marginLeft: 50,
  },

  content: {
    marginLeft: 50,
    marginRight: 100,
  },

  item: {
    width: "fit-content",
    padding: 0,
  },
  //   key: {},
}));
