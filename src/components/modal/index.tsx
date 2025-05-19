"use client";

import {
  useRef,
  forwardRef,
  DialogHTMLAttributes,
  useImperativeHandle,
} from "react";
import styles from "./modal.module.css";

export type ModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};

export const Modal = forwardRef<
  ModalHandle,
  DialogHTMLAttributes<HTMLDialogElement>
>(({ children, className }, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    dialogRef.current?.close();
  };

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal,
    };
  });

  return (
    <dialog className={styles.dialog} ref={dialogRef}>
      <header className={styles.header}>
        <button onClick={() => closeModal()}> X </button>
      </header>
      <section className={className}>{children}</section>
    </dialog>
  );
});
