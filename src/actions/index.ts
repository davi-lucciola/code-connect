"use server";

import { db } from "@/lib/db";
import { Post } from "@/models/post";
import { revalidatePath } from "next/cache";

export async function incrementThumbsUp(post: Post) {
  await db.post.update({
    where: { id: post.id },
    data: { likes: { increment: 1 } },
  });

  revalidatePath("/");
  revalidatePath(`/posts/${post.slug}`);
}

export async function postComment(post: Post, formData: FormData) {
  const author = await db.user.findFirst({
    where: {
      username: "anabeatriz_dev",
    },
  });

  const text = formData.get("text")?.toString() ?? "";

  if (author && text) {
    await db.comment.create({
      data: {
        text: text,
        authorId: author.id,
        postId: post.id,
      },
    });
  }

  revalidatePath("/");
  revalidatePath(`/posts/${post.slug}`);
}
