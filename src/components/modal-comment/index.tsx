"use client";

import { useRef } from "react";
import Image from "next/image";
import chatIcon from "@/assets/icons/chat-icon.svg";
import { IconButton } from "@/components/icon-button";
import { Modal, ModalHandle } from "@/components/modal";
import styles from "./modal-comment.module.css";
import { ModalButton } from "../modal-button";
import { postComment } from "@/actions";
import { Post } from "@/models/post";

export const ModalComment = ({ post }: { post: Post }) => {
  const modalRef = useRef<ModalHandle>(null);

  const submitComment = postComment.bind(null, post);

  const handleSubmitComment = async (formData: FormData) => {
    await submitComment(formData);
    modalRef.current?.closeModal();
  };

  return (
    <>
      <Modal className={styles.modalComment} ref={modalRef}>
        <h1> Deixe seu comentário sobre o post: </h1>
        <form action={handleSubmitComment}>
          <textarea
            name="text"
            id="text"
            placeholder="Digite seu comentário"
          ></textarea>
          <ModalButton>Comentar</ModalButton>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current?.openModal()}>
        <Image src={chatIcon} alt="" />
      </IconButton>
    </>
  );
};
