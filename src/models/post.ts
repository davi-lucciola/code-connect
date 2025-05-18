import { Comment } from "./comment";
import { User } from "./user";

export type Post = {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  author: User;
  comments: Comment[];
};
