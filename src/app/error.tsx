"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import styles from "./error.module.css";
import errorImage from "@/assets/images/500.png";
import Link from "next/link";
import Image from "next/image";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className={styles.section}>
      <Image src={errorImage} alt="Error Inesperado" />
      <h1> Opa! Um erro ocorreu </h1>
      <p>Não conseguimos carregar a página, volte para seguir navegando. </p>
      <Link className={styles.link} href="/">
        Voltar ao Feed &#8592;
      </Link>
    </section>
  );
}
