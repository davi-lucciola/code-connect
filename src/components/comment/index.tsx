import { Avatar } from "@/components/avatar";
import { Comment as CommentModel } from "@/models/comment";
import styles from "./comment.module.css";

type CommentProps = {
  comment: CommentModel;
  highlight?: boolean;
};

export const Comment = ({ comment, highlight = false }: CommentProps) => {
  const author = comment.author!;

  return (
    <div className={highlight ? styles.commentHighlight : styles.comment}>
      <Avatar name={author.username} imageUrl={author.avatar} />
      <p className={styles.text}>{comment.text}</p>
    </div>
  );
};
