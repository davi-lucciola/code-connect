import Image from "next/image";
import styles from "./avatar.module.css";

type AvatarProps = {
  name: string;
  imageUrl: string;
};

export const Avatar = ({ name, imageUrl }: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      <Image
        src={imageUrl}
        alt={`${name} Avatar Image`}
        width={32}
        height={32}
      />
      <p className="username"> @{name} </p>
    </div>
  );
};
