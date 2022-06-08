import React, { FC } from "react";
import { makeStyles, Box, Typography, List, ListItem } from "@material-ui/core";
import { BookmarkOutlined } from "@material-ui/icons";
import Image from "next/image";
import kakaoStyle from "../../../images/kakaoStyle.png";
import { gql, useQuery } from "@apollo/client";
import { differenceInCalendarDays } from "date-fns";

type categorieType = {
  id: string;
  name: string;
};

type interestType = {
  id: string;
  naem: string;
};

interface MostViewPostListProps {
  post: {
    activityTypeID: number;
    categories: categorieType[];
    id: number;
    interests: interestType[];
  };
}

const MOST_VIEW_POST = gql`
  query FamousActivityList($input: FamousActivityListInput!) {
    famousActivityList(input: $input) {
      activities {
        id
        title
        type
        thumbnailImage {
          id
          url
        }
        logoImage {
          id
        }
        scrapCount
        organizationName
        recruitType
        recruitCloseAt
        viewCount
        replyCount
      }
    }
  }
`;

const MostViewPostList: FC<MostViewPostListProps> = ({ post }) => {
  const classes = useStyles();

  const { data, error, loading } = useQuery(MOST_VIEW_POST, {
    variables: {
      input: {
        activityID: post?.id,
        activityTypeIDs: [post?.activityTypeID || 0],
        interestIDs:
          post?.interests?.map((interest) =>
            parseInt(interest?.id || "0", 10)
          ) || [],
        categoryIDs:
          post?.categories?.map((category) =>
            parseInt(category?.id || "0", 10)
          ) || [],
        limit: 4,
      },
    },
  });

  const famousActivityList = data?.famousActivityList;
  console.log("adsasddas", data?.famousActivityList);

  return (
    <div className={classes.root}>
      {famousActivityList?.activities?.map((item: any) => (
        <Box className={classes.item}>
          <Box className={classes.content} key={item.id}>
            <Box className={classes.iconCountRight}>
              <Box className={classes.iconCountWrapper}>
                <BookmarkOutlined className={classes.icon} />
                <Typography className={classes.count}>
                  {item.scrapCount}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Image src={item?.thumbnailImage?.url} width={171} height={60} />
            </Box>
            <Box className={classes.comment}>
              <Typography className={classes.text}>담당자 답변받기</Typography>
            </Box>
          </Box>
          <Box>
            <Typography className={classes.title}>{item.title}</Typography>
            <Typography className={classes.subTitle}>
              {item.organizationName}
            </Typography>
            <List className={classes.desc}>
              <ListItem className={classes.detail}>
                D-{differenceInCalendarDays(item.recruitCloseAt, new Date())}
              </ListItem>
              <ListItem className={classes.detail}>
                조회 {item.viewCount}
              </ListItem>
              <ListItem className={classes.detail}>
                댓글 {item.replyCount}
              </ListItem>
            </List>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default MostViewPostList;

const useStyles = makeStyles(() => ({
  root: {
    padding: "22px 0 22px 0",

    width: "100%",
    display: "flex",
  },

  item: {
    width: "fit-content",
    marginRight: 10,
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
    width: 45,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    margin: "5px 5px 0 0",
    paddingRight: 3,
  },

  icon: {
    fontSize: 15,
    marginRight: 3,
  },
  count: {
    fontSize: 12,
    fontWeight: 500,
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
    fontWeight: 800,
    width: 171,
    height: 50,
    overflow: "hidden",
    marginBottom: 10,
    letterSpacing: -0.48,
    // border: "1px solid",
    textOverflow: "ellipsis",
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
