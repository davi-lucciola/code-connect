"use client";

import { useEffect, useState } from "react";
import styles from "./replies.module.css";
import { Comment as CommentModel } from "@/models/comment";
import { Comment } from "../comment";
import { Post } from "@/models/post";
import { ModalReply } from "../modal-reply";

type RepliesProps = {
  post: Post;
  comment: CommentModel;
};

export const Replies = ({ post, comment }: RepliesProps) => {
  const [replies, setReplies] = useState<CommentModel[]>([]);
  const [showReplies, setShowReplies] = useState(false);

  const fetchData = async () => {
    const response = await fetch(`/api/comment/${comment.id}/replies`);
    const data = await response.json();
    setReplies(data);
  };

  useEffect(() => {
    if (!showReplies) return;
    fetchData();
  }, [showReplies]);

  return (
    <>
      <div className={styles.replies}>
        <hr />
        <button onClick={() => setShowReplies((prev) => !prev)}>
          {showReplies ? "Ocultar" : "Ver"} Respostas
        </button>
      </div>
      {showReplies && replies && (
        <ul className={styles.repliesList}>
          {replies.map((reply) => (
            <li key={reply.id}>
              <Comment comment={reply} />
              <ModalReply post={post} comment={reply} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
