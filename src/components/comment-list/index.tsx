import { Post } from "@/models/post";
import { Comment } from "@/components/comment";
import { Replies } from "@/components/replies";
import { ModalReply } from "@/components/modal-reply";
import styles from "./comment-list.module.css";

type CommentListProps = {
  post: Post;
};

export const CommentList = ({ post }: CommentListProps) => {
  return (
    <ul className={styles.commentList}>
      {post.comments.map((comment, index) => (
        <li key={comment.id}>
          <Comment comment={comment} />
          <ModalReply post={post} comment={comment} />
          <Replies post={post} comment={comment} />
          {index != post.comments.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
};
