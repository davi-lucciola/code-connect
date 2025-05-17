import Image from "next/image";
import { Post } from "@/models/post";
import { Avatar } from "@/components/avatar";
import styles from "./post-card.module.css";
import Link from "next/link";

type CardPostProps = {
  post: Post;
  highlight?: boolean;
};

export const CardPost = ({ post, highlight }: CardPostProps) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={highlight ? styles.cardHighlight : styles.card}>
        <header className={styles.header}>
          <figure>
            <Image
              src={post.cover}
              alt={`Capa do Post ${post.title}`}
              width={438}
              height={138}
            />
          </figure>
        </header>
        <section className={styles.section}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar name={post.author.username} imageUrl={post.author.avatar} />
        </footer>
      </article>
    </Link>
  );
};
