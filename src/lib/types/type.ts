export type Category = {
  id: string;
  name: string;
  detailUrl: string;
  createdDate: string;
};

export type CategoryList = {
  count: number;
  next?: string;
  previous?: string;
  results: Category[];
};

export type QueryParam = Record<string, string | number | boolean | null>;

export type Tag = {
  id: string;
  name: string;
  detailUrl: string;
  createdDate: string;
};

export type TagList = {
  count: number;
  next?: string;
  previous?: string;
  results: Tag[];
};

export type ReadToken = string;

export type PostList = {
  count: number;
  next?: string;
  previous?: string;
  results: Post[];
};

export type Post = {
  id: string;
  title: string;
  tags: Tag[];
  categories: Category[];
  description: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  slug: string;
  content: string;
  featuredImage: string;
  active: boolean;
  published: boolean;
  deleted: boolean;
  createdDate: string;
  updatedDate: string;
  publishedDate: string;
};

export type AuthorList = {
  count: number;
  next?: string;
  previous?: string;
  results: Author[];
};

export type Author = {
  id: string;
  role: string;
  email: string;
  firstName: string;
  lastName: string;
  active: string;
  lastLogin: string;
};
