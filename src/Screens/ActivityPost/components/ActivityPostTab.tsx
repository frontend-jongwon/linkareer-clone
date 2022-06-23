import React, { FC } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TabPanel from "../../../Components/TabPanel";
import clsx from "clsx";
import {
  ArrowForwardIosOutlined,
  MessageOutlined,
  RemoveRedEyeOutlined,
  ChatBubbleOutlineOutlined,
  RadioButtonUnchecked,
} from "@material-ui/icons";
import { useQuery, gql } from "@apollo/client";
import { format } from "date-fns";
import { BoardSlug, ActivityTypeID } from "../../../Utils/enums";
import { getValueFromActivityType } from "../../../Utils/getValueFromActivityType";
import { Loading } from "../../../Components";
import { TextArea } from "../../../Components/TextArea";

const ACTIVITY_POST_MATERIAL = gql`
  query CommunityPostSearch($input: CommunityPostSearchInput!) {
    communityPostSearch(input: $input) {
      data
    }
  }
`;

interface ActivityPostTabProps {
  activityText: {
    id: string;
    text: string;
  };
  activityTypeID: ActivityTypeID;
  activityTitle: string;
  activityTab: number;
  onTabChange: (value: number) => void;
}

const ActivityPostTab: FC<ActivityPostTabProps> = ({
  activityText,
  activityTypeID,
  activityTitle,
  activityTab,
  onTabChange,
}) => {
  const classes = useStyles();

  const { data, error, loading } = useQuery(ACTIVITY_POST_MATERIAL, {
    variables: {
      input: {
        query: activityTitle,
        boardSlugs: [
          getValueFromActivityType(activityTypeID, {
            activity: BoardSlug.ACTIVITY,
            contest: BoardSlug.CONTEST,
            club: BoardSlug.CLUB,
            intern: BoardSlug.INTERN,
            recruit: BoardSlug.INTERN,
          }),
        ],
        pruneLength: 200,
      },
    },
  });

  const recommendPostMaterial =
    data?.communityPostSearch?.data?.postSearch?.nodes?.slice(0, 3);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    onTabChange(newValue);
  };

  const createMarkup = () => {
    return {
      __html: activityText?.text,
    };
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={activityTab}
        onChange={handleChange}
        aria-label="simple tabs example"
        TabIndicatorProps={{
          style: { background: "#01A0FF", height: 3 },
        }}
        className={classes.tabs}
        variant="fullWidth"
      >
        <Tab
          className={clsx(classes.tab, {
            [classes.selected]: activityTab === 0,
          })}
          label="상세내용"
        />
        <Tab
          className={clsx(classes.tab, {
            [classes.selected]: activityTab === 1,
          })}
          label={
            <div>
              <span>합격자료</span>
              <span className={classes.label}>HOT</span>
            </div>
          }
        />
        <Tab
          className={clsx(classes.tab, {
            [classes.selected]: activityTab === 2,
          })}
          label="담당자Q&A"
        />
      </Tabs>
      <TabPanel value={activityTab} index={0}>
        {loading && <Loading />}
        <Typography className={classes.title}>상세내용</Typography>
        <div
          dangerouslySetInnerHTML={createMarkup()}
          className={classes.info}
        ></div>
      </TabPanel>
      <TabPanel value={activityTab} index={1}>
        <div className={classes.panelRoot}>
          <Box className={classes.content}>
            <Box className={classes.wrapper}>
              <MessageOutlined className={classes.icon} />
              <Typography className={classes.cotentTitle}>
                추천 합격자료
              </Typography>
            </Box>
            <Box className={classes.wrapper}>
              <Typography className={classes.more}>더보기 </Typography>
              <ArrowForwardIosOutlined className={classes.arrow} />
            </Box>
          </Box>

          {recommendPostMaterial?.map((post: any) => (
            <Box className={classes.contentWrapper} key={post.source.id}>
              <Typography className={classes.headTitle}>
                {post?.source?.title}
              </Typography>
              <Box className={classes.contentInfo}>{post?.source?.excerpt}</Box>
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  {format(post?.source?.createdAt, "yyyy.MM.dd")}
                </ListItem>
                <ListItem className={classes.listItem}>
                  <RemoveRedEyeOutlined className={classes.detail} />
                  <Typography className={classes.detail}>
                    {post?.source?.views}
                  </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <ChatBubbleOutlineOutlined className={classes.detail} />
                  <Typography className={classes.detail}>
                    {post?.source?.commentCount}
                  </Typography>
                </ListItem>
              </List>
            </Box>
          ))}
          <Divider />
          <Divider className={classes.divider} />
          <Box className={classes.content}>
            <Box className={classes.wrapper}>
              <RadioButtonUnchecked className={classes.icon} />
              <Typography className={classes.cotentTitle}>
                인기 활동 리스트
              </Typography>
            </Box>
            <Box className={classes.wrapper}>
              <Typography className={classes.more}>더보기 </Typography>
              <ArrowForwardIosOutlined className={classes.arrow} />
            </Box>
          </Box>
        </div>
      </TabPanel>
      <TabPanel value={activityTab} index={2}>
        <TextArea />
      </TabPanel>
    </div>
  );
};

export default ActivityPostTab;

const useStyles = makeStyles(() => ({
  root: {},

  tabs: {
    backgroundColor: "#ffffff",
    display: "inline-flex",
    width: "100%",
    padding: 0,

    marginBottom: 42,
  },

  tab: {
    color: "#000000",
    fontSize: 15,
    fontWeight: 700,
    borderBottom: "1.5px solid #dddddd",
  },

  info: {
    "& img": {
      width: 926,
    },
  },

  title: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 21,
    fontWeight: 800,
  },

  panel: {},

  selected: {
    color: "#01A0FF",
  },

  // panel 2
  panelRoot: {
    marginBottom: 20,
  },

  content: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    fontSize: 19,
    color: "#01a0ff",
    marginRight: 8,
  },

  cotentTitle: {
    color: "#01a0ff",
    fontSize: 18,
    fontWeight: 800,
  },

  arrow: {
    fontSize: 15,
    color: "#bbbbbb",
    fontWeight: 800,
  },

  more: {
    color: "#333333",
    fontSize: 15,
    fontWeight: 700,
    marginRight: 3,
  },

  contentWrapper: {
    padding: 14,
    borderTop: "1px solid #dddddd",
    borderLeft: "1px solid #dddddd",
    borderRight: "1px solid #dddddd",
  },

  contentInfo: {
    width: 900,
    color: "#333333",
    fontSize: 14,
    letterSpacing: -0.48,
  },

  headTitle: {
    color: "#333333",
    fontSize: 16,
    fontWeight: 800,
    marginBottom: 4,
  },

  list: {
    padding: 0,
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    marginTop: 3,
  },
  listItem: {
    padding: 0,
    color: "#bbbbbb",
    fontSize: 14,
    fontWeight: 500,
    marginRight: 25,
  },
  detail: {
    padding: 0,
    color: "#bbbbbb",
    fontSize: 14,
    fontWeight: 500,
    marginRight: 3,
  },

  divider: {
    margin: "20px 0 20px 0",
  },

  label: {
    background: "#01a0ff",
    color: "#ffffff",
    marginLeft: 4,
    fontSize: 10,
    padding: 4,
    borderRadius: 5,
  },
}));
