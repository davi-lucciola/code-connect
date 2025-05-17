import Link from "next/link";
import styles from "./error.module.css";
import notFoundImage from "@/assets/images/404.png";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <section className={styles.section}>
      <Image src={notFoundImage} alt="Rota não Encontrada" />
      <h1> OPS! Página não encontrada. </h1>
      <p>Você pode voltar ao feed e continuar buscando projetos incríveis!</p>
      <Link className={styles.link} href="/">
        Voltar ao Feed &#8592;
      </Link>
    </section>
  );
}
