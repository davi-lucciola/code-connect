import { Post } from "@/models/post";
import { logger } from "@/lib/logger";
import { CardPost } from "@/components/card-post";
import styles from "./page.module.css";
import { Pagination, PaginationQuery } from "@/models/pagination";
import Link from "next/link";

type HomeProps = {
  searchParams: PaginationQuery;
};

async function getAllPosts(page: number): Promise<Pagination<Post[]>> {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  ).catch((error) => {
    logger.error(
      "Houve um error ao realizar a solicitação de busca de posts: " +
        error.message
    );
    return null;
  });

  if (!response) {
    return { data: [] };
  }

  if (!response.ok) {
    logger.error("Houve um error ao buscar posts.");
    return { data: [] };
  }

  logger.info("Posts obtidos com sucesso.");
  return await response.json();
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
