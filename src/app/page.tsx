import { Post } from "@/models/post";
import { logger } from "@/lib/logger";
import { CardPost } from "@/components/card-post";
import styles from "./page.module.css";
import { Pagination, PaginationQuery } from "@/models/pagination";
import Link from "next/link";
import { db } from "@/lib/db";

type HomeProps = {
  searchParams: PaginationQuery;
};

async function getAllPosts(page: number): Promise<Pagination<Post[]>> {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true,
      },
    });
    return { data: posts };
  } catch (error) {
    logger.error("Falha ao obter posts", { error });
    return { data: [] };
  }
}

export default async function HomePage({ searchParams }: HomeProps) {
  const currentPage = searchParams.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <footer>
        {prev && <Link href={`/?page=${prev}`}> Página Anterior </Link>}
        {next && <Link href={`/?page=${next}`}> Proxima Página </Link>}
      </footer>
    </main>
  );
}
