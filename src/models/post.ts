import { User } from "./user";
import { Comment } from "./comment";

export type Post = {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  authorId: number;
  author: User;
  comments: Comment[];
};
