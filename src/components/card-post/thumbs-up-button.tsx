"use client";

import Image from "next/image";
import thumbsUp from "@/assets/icons/thumbs-up.svg";
import { Spinner } from "@/components/spinner";
import { IconButton } from "@/components/icon-button";
import { useFormStatus } from "react-dom";

export const ThumbsUpButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();

  return (
    <IconButton disabled={pending}>
      {pending ? (
        <Spinner />
      ) : (
        <Image src={thumbsUp} alt={`Thumbs Up Icon for ${title}`} />
      )}
    </IconButton>
  );
};
