import { Post } from "@/models/post";
import { logger } from "@/lib/logger";
import { CardPost } from "@/components/card-post";
import styles from "./page.module.css";
import { Pagination, PaginationQuery } from "@/models/pagination";
import Link from "next/link";
import { db } from "@/lib/db";

type PostSearchParams = PaginationQuery & { q?: string };

type HomeProps = {
  searchParams: PostSearchParams;
};

async function getAllPosts(
  page: number,
  perPage: number,
  search?: string
): Promise<Pagination<Post[]>> {
  try {
    const where: any = {};

    if (search) {
      where.title = {
        contains: search,
        mode: "insensitive",
      };
    }

    const totalItems = await db.post.count({ where });
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
      where: where,
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
  const searchTerm = searchParams.q;

  const {
    data: posts,
    prev,
    next,
  } = await getAllPosts(page, perPage, searchTerm);

  return (
    <main className={styles.main}>
      <section>
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </section>
      <footer>
        {prev && (
          <Link href={{ pathname: "/", query: { page: prev, q: searchTerm } }}>
            Página Anterior
          </Link>
        )}
        {next && (
          <Link href={{ pathname: "/", query: { page: next, q: searchTerm } }}>
            Proxima Página
          </Link>
        )}
      </footer>
    </main>
  );
}
