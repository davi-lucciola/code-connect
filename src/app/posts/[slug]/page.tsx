import { notFound } from "next/navigation";
import { logger } from "@/lib/logger";
import { Post } from "@/models/post";
import { remark } from "remark";
import html from "remark-html";
import styles from "./post-page.module.css";
import { CardPost } from "@/components/card-post";

type PostPageProps = {
  params: { slug: string };
};

async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const response = await fetch(
    `http://localhost:3042/posts?slug=${slug}`
  ).catch((error) => {
    logger.error(
      "Houve um error ao realizar a solicitação de buscar post pelo slug " +
        error.message
    );
    return null;
  });

  if (!response) return;

  if (!response.ok) {
    logger.error("Houve um error ao buscar post pelo slug.");
    return;
  }

  const data = await response.json();

  if (data.length == 0) {
    return;
  }
  logger.info("Posts obtido pelo slug com sucesso.");

  const post: Post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  post.markdown = processedContent.toString();

  return post;
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className={styles.postPageContainer}>
      <CardPost post={post} highlight />
      <h1 className={styles.h1}> Código </h1>
      <div
        className={styles.code}
        dangerouslySetInnerHTML={{ __html: post.markdown }}
      ></div>
    </div>
  );
}
