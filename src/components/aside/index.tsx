import Image from "next/image";
import styles from "./aside.module.css";
import logo from "@/assets/images/logo.png";
import Link from "next/link";

/*
Next Learn 1:
- Default <Image /> component in next js optimizes the images loading 
by serving the correctly image size for each device and cast the image format to Webp ()
*/

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Link href="/">
        <Image
          alt="Logo da Code Connect"
          src={logo}

          // I can do this in Next 15 if the image is in "public" folder
          // src="/logo.png"
        />
      </Link>
      {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
    </aside>
  );
};
