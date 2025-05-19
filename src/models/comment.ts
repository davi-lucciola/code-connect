// import { Post } from "./post";
// import { User } from "./user";

export type Comment = {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  postId: number;
  parentId: number | null;
};
