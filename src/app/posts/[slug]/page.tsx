import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { logger } from "@/lib/logger";
import { Post } from "@/models/post";
import { CardPost } from "@/components/card-post";
import { remark } from "remark";
import html from "remark-html";
import styles from "./post-page.module.css";
import { CommentList } from "@/components/comment-list";

type PostPageProps = {
  params: { slug: string };
};

async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    const post = await db.post.findFirst({
      include: {
        author: true,
        comments: {
          include: {
            author: true,
          },
          where: {
            parentId: null,
          },
        },
      },
      where: {
        slug: slug,
      },
    });

    if (!post) return;

    const processedContent = await remark().use(html).process(post.markdown);
    post.markdown = processedContent.toString();

    return post;
  } catch (error) {
    logger.error("Falha ao obter post com slug: ", slug, error);
    throw error;
  }
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
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{ __html: post.markdown }}></div>
      </div>
      <div className={styles.comments}>
        <h2> Comentários </h2>
        <CommentList post={post} />
      </div>
    </div>
  );
}
