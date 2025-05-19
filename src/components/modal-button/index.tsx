"use client";

import Image from "next/image";
import arrowFoward from "@/assets/icons/arrow-foward.svg";
import styles from "./modal-button.module.css";
import { ButtonHTMLAttributes } from "react";
import { useFormStatus } from "react-dom";
import { Spinner } from "../spinner";

export const ModalButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { pending } = useFormStatus();

  return (
    <button {...props} disabled={pending} className={styles.modalBtn}>
      {children}
      {pending ? <Spinner /> : <Image src={arrowFoward} alt="arrow-foward" />}
    </button>
  );
};
