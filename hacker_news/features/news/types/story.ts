import { Author } from "./author";

export type Story = {
  id: number;
  title: string;
  url: string;
  timestamp: number;
  score: number;
  author: Author;
  img: string;
};
