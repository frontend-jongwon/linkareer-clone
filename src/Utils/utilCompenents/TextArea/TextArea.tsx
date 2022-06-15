import React, { FC, useState } from "react";
import { TextareaAutosize, Button, Box, makeStyles } from "@material-ui/core";
import { format } from "date-fns";
import TextAreaComment from "./TextAreaComment";
import { commentListType } from "../../types";

const TextArea: FC = () => {
  const classes = useStyles();

  const [commemtList, setCommentList] = useState<commentListType[]>([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  };

  const handleAddCommentButton = () => {
    setCommentList([
      ...commemtList,
      {
        id: commemtList.length + 1,
        nickname: "환상적인 양",
        date: format(new Date(), "yyyy.MM.dd"),
        comment: comment,
      },
    ]);
    setComment("");
  };

  return (
    <div className={classes.root}>
      <div className={classes.commetField}>
        {commemtList?.map((comment: commentListType) => (
          <TextAreaComment comment={comment} />
        ))}
      </div>
      <div className={classes.commentWrapper}>
        <textarea
          placeholder="댓글을 입력해주세요."
          className={classes.textArea}
          onChange={handleCommentChange}
          value={comment}
        />
        <button onClick={handleAddCommentButton} className={classes.button}>
          등록
        </button>
      </div>
    </div>
  );
};

export default TextArea;

const useStyles = makeStyles(() => ({
  root: {},

  commetField: {
    width: "100%",
  },
  commentWrapper: {
    width: "100%",
    display: "flex",
    marginBottom: 100,
    padding: 0,
  },

  textArea: {
    width: "91.5%",
    padding: 10,
    marginRight: 6,
    height: 80,
    border: "1px solid #dddddd",
    outline: "none",
    resize: "none",
  },

  button: {
    width: "8.5%",
    border: "1px solid #dddddd",
    color: "#333333",
    backgroundColor: "#f8f9fa80",
    borderRadius: "none",
  },
}));
