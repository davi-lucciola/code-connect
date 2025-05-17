import Image from "next/image";
import searchIcon from "./search-icon.svg";
import styles from "./search-bar.module.css";

export const SearchBar = () => {
  return (
    <form action="" autoComplete="off" className={styles.searchBar}>
      <div>
        <Image src={searchIcon} alt="Icone Pesquisa" />
        <input type="text" placeholder="Digite o que você procura" />
      </div>
      <button type="submit"> Buscar </button>
    </form>
  );
};
