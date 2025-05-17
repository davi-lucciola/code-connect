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

async function getAllPosts(
  page: number,
  perPage: number
): Promise<Pagination<Post[]>> {
  try {
    const totalItems = await db.post.count();
    const totalPages = Math.ceil(totalItems / perPage);

    const prev = page > 1 ? page - 1 : undefined;
    const next = page < totalPages ? page + 1 : undefined;

    const posts = await db.post.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: true,
      },
    });

    return { data: posts, prev: prev, next };
  } catch (error) {
    logger.error("Falha ao obter posts", { error });
    return { data: [] };
  }
}

export default async function HomePage({ searchParams }: HomeProps) {
  const page = Number(searchParams.page) || 1;
  const perPage = Number(searchParams.perPage) || 6;

  const { data: posts, prev, next } = await getAllPosts(page, perPage);

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <footer>
        {prev && (
          <Link href={`/?page=${prev}&perPage=${perPage}`}>
            Página Anterior
          </Link>
        )}
        {next && (
          <Link href={`/?page=${next}&perPage=${perPage}`}>
            Proxima Página
          </Link>
        )}
      </footer>
    </main>
  );
}
