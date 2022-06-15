import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";

interface TextAreaCommentType {
  comment: {
    id: number;
    nickname: string;
    date: string;
    comment: string;
  };
}

const TextAreaComment: FC<TextAreaCommentType> = ({ comment }) => {
  const classes = useStyles();
  return (
    <div className={classes.commentItem} key={comment.id}>
      <div className={classes.img}>이미지</div>
      <ul className={classes.desc}>
        <li className={classes.nickname}>{comment.nickname}</li>
        <li className={classes.date}>{comment.date}</li>
        <li className={classes.context}>{comment.comment}</li>
      </ul>
    </div>
  );
};

export default TextAreaComment;

const useStyles = makeStyles(() => ({
  commentItem: {
    width: "fit-content",
    display: "flex",
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 46,
    height: 46,
    border: "1px solid #dddddd",
    marginRight: 20,
  },

  nickname: {
    color: "#333333",
    fontSize: 14,
    fontWeight: 700,
    listStyleType: "none",
  },

  date: {
    fontSize: 12,
    listStyleType: "none",
    color: "#4a5f6ed6",
  },

  context: {
    // backgroundColor: "#dddddd",
    width: "fit-content",
    fontSize: 12,
    padding: "11px 13px 12px 19px",
    fontWeight: 600,
    backgroundColor: "#e6ecf0",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    color: "#4a5f6ed6",
    listStyleType: "none",
    marginTop: 10,
  },

  desc: {
    width: "fit-content",
    padding: 0,
  },
}));
