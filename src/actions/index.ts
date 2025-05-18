"use server";

import { db } from "@/lib/db";
import { Post } from "@/models/post";
import { revalidatePath } from "next/cache";

export async function incrementThumbsUp(post: Post) {
  await db.post.update({
    where: { id: post.id },
    data: { likes: { increment: 1 } },
  });

  revalidatePath('/');
  revalidatePath(`/posts/${post.slug}`);
}
