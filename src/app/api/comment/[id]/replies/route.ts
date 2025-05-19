import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const replies = await db.comment.findMany({
    where: {
      parentId: parseInt(params.id),
    },
    include: {
      author: true,
    },
  });

  return NextResponse.json(replies);
}
