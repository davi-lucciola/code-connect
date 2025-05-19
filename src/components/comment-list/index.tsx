import { Fragment } from "react";
import { Comment } from "@/components/comment";
import { Comment as CommentModel } from "@/models/comment";
import styles from "./comment-list.module.css";
import { ModalReply } from "../modal-reply";

type CommentListProps = {
  comments: CommentModel[];
};

export const CommentList = ({ comments }: CommentListProps) => {
  return (
    <ul className={styles.commentList}>
      {comments.map((comment, index) => (
        <li key={comment.id}>
          <Comment comment={comment} />
          <ModalReply comment={comment} />
          {index != comments.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
};
