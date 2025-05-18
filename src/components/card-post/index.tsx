import Image from "next/image";
import Link from "next/link";
import { Post } from "@/models/post";
import { Avatar } from "@/components/avatar";
import { incrementThumbsUp } from "@/actions";
import styles from "./post-card.module.css";
import { ThumbsUpButton } from "./thumbs-up-button";

type CardPostProps = {
  post: Post;
  highlight?: boolean;
};

export const CardPost = ({ post, highlight }: CardPostProps) => {
  const submitThumbsUp = incrementThumbsUp.bind(null, post);

  return (
    <article className={highlight ? styles.cardHighlight : styles.card}>
      <header className={styles.header}>
        <figure>
          <Image
            src={post.cover}
            alt={`Capa do Post ${post.title}`}
            width={highlight ? 962 : 438}
            height={highlight ? 300 : 138}
          />
        </figure>
      </header>
      <section className={styles.section}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${post.slug}`}> Ver Detalhes </Link>
      </section>
      <footer className={styles.footer}>
        <div>
          <form action={submitThumbsUp}>
            <ThumbsUpButton title={post.title} />
          </form>
          <p>{post.likes}</p>
        </div>
        <Avatar name={post.author.username} imageUrl={post.author.avatar} />
      </footer>
    </article>
  );
};
