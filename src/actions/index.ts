"use server";

import { db } from "@/lib/db";
import { Post } from "@/models/post";

export async function incrementThumbsUp(post: Post) {
  await db.post.update({
    where: { id: post.id },
    data: { likes: { increment: 1 } },
  });
}
