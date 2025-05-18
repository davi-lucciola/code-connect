import { Post } from "./post";
import { User } from "./user";

export type Comment = {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  author: User;
  postId: number;
  post: Post;
  parentId: number;
  parent: Comment;
  childrens: Comment[];
};
