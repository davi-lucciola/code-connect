"use client";

import { useRef } from "react";
import { Modal, ModalHandle } from "../modal";
import { ModalButton } from "../modal-button";
import { User } from "@/models/user";
import { Avatar } from "../avatar";
import { IconButton } from "../icon-button";
import styles from "./modal-reply.module.css";
import { Comment } from "../comment";
import { Comment as CommentModel } from "@/models/comment";
import { commentReply } from "@/actions";
import { Post } from "@/models/post";

type ModalReplyProps = {
  post: Post;
  comment: CommentModel;
};

export const ModalReply = ({ post, comment }: ModalReplyProps) => {
  const modalRef = useRef<ModalHandle | null>(null);

  const submitReply = commentReply.bind(null, post, comment);

  const handleSubmitReply = async (formData: FormData) => {
    await submitReply(formData);
    modalRef.current?.closeModal();
  };

  return (
    <>
      <Modal className={styles.modalReply} ref={modalRef}>
        <Comment comment={comment} highlight />
        <div className={styles.line}></div>
        <form action={handleSubmitReply}>
          <textarea name="text" id="text"></textarea>
          <ModalButton>Responder</ModalButton>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current?.openModal()}>
        <p className={styles.replyParagraph}>Responder</p>
      </IconButton>
    </>
  );
};
