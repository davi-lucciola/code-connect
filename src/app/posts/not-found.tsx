import Link from "next/link";
import styles from "./not-found.module.css";

export default function PostNotFoundPage() {
  return (
    <section className={styles.section}>
      <h1> Post não encontrado </h1>
      <p>
        Não encontramos o post que está tendando acessar, verifique se o post
        continua ativo ou foi excluído.
      </p>
      <Link className={styles.link} href="/">
        Voltar a Página Inicial
      </Link>
    </section>
  );
}
