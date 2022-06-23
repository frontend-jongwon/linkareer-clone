import React, { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { format } from "date-fns";
import face from "../../../images/face.png";
import Image from "next/image";

interface TextAreaCommentType {
  comment: {
    id: string;
    name: string;
    createdAt: Date;
    content: string;
  };
}

const TextAreaComment: FC<TextAreaCommentType> = ({ comment }) => {
  const classes = useStyles();
  return (
    <div className={classes.commentItem} key={comment.id}>
      <div className={classes.img}>
        <Image src={face} width={63} height={77} />
      </div>
      <div className={classes.desc}>
        <span className={classes.nickname}>{comment.name}</span>
        <span className={classes.date}>
          {format(new Date(comment.createdAt), "yyyy.MM.dd")}
        </span>
        <span className={classes.context}>{comment.content}</span>
      </div>
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
    marginBottom: 20,
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: "50%",
    border: "1px solid #dddddd",
    overflow: "hidden",
    marginBottom: 40,
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
    display: "flex",
    flexDirection: "column",
  },
}));
