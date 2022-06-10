import React, { FC } from "react";
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
import ActivityPostButton from "./ActivityPostButton";
import { Launch } from "@material-ui/icons";
import { format } from "date-fns";
import {
  categoriesType,
  regionDistrictsType,
  thumbnailImage,
} from "../../Utils/types";

interface ActivityPostItemProps {
  activityPostItem: {
    thumbnailImage: thumbnailImage;
    activityTypeID: string;
    organizationName: string;
    organizationType: string;
    createdAt: Date;
    homepageURL: string;
    categories: categoriesType[];
    jobTypes: string[];
    recruitCloseAt: Date;
    regionDistricts: regionDistrictsType[];
  };
}

const ActivityPostContent: FC<ActivityPostItemProps> = ({
  activityPostItem,
}) => {
  const myLoader = () => {
    return activityPostItem?.thumbnailImage.url;
  };

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.image}>
        <Image
          loader={myLoader}
          src="contentImage.png"
          width={165}
          height={69}
        />
      </Box>
      <Box>
        <Typography variant="h6" className={classes.title}>
          {activityPostItem?.organizationName}
        </Typography>
        <Box className={classes.row}>
          <List className={classes.content}>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 800,
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
                {activityPostItem?.organizationType}
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 800,
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
                {activityPostItem?.categories[0].name}
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 800,
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
                {activityPostItem?.jobTypes[0] === "INTERN" && "인턴"}
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 800,
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
                {activityPostItem?.regionDistricts[0].region.name} {""}
                {activityPostItem?.regionDistricts[0].name}
                {", "}
                {activityPostItem?.regionDistricts[1].name}
                {", "}
                {activityPostItem?.regionDistricts[2].region.name} {""}
                {activityPostItem?.regionDistricts[2].name}
              </ListItemText>
            </ListItem>
          </List>
          <List>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 800,
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
                {activityPostItem &&
                  `${format(
                    new Date(activityPostItem?.createdAt),
                    "yy.MM.dd"
                  )} ~ ${format(
                    new Date(activityPostItem?.recruitCloseAt),
                    "yy.MM.dd"
                  )}`}
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 800,
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
                00명
              </ListItemText>
            </ListItem>
            <ListItem className={classes.item}>
              <ListItemText
                primaryTypographyProps={{
                  style: {
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#4990e2",
                    marginRight: 30,
                  },
                }}
              >
                홈페이지
              </ListItemText>
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: 15, fontWeight: 400, color: "#01A0ff" },
                }}
              >
                <Box className={classes.LinkIconWrapper}>
                  <Link href="/">
                    <a href="" className={classes.url}>
                      {activityPostItem?.homepageURL}
                    </a>
                  </Link>
                  <Launch className={classes.icon} />
                </Box>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <ActivityPostButton />
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
    marginBottom: 70,
  },

  row: {
    display: "flex",
    marginBottom: 75,
  },

  image: {
    border: "1px solid #dddddd",
    width: 245,
    height: 245,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#333333",
    fontWeight: 700,
    fontSize: 18,
    marginLeft: 50,
    marginBottom: 6,
  },

  content: {
    marginLeft: 50,
    marginRight: 20,
  },

  item: {
    width: "fit-content",
    padding: 0,
  },
  icon: {
    width: 18,
    height: 18,
    color: "#01A0ff",
  },

  LinkIconWrapper: {
    display: "flex",
    alignItems: "center",
  },

  url: {
    width: 190,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
