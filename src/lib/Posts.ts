import { PostList, Post } from "./types/type";
import { ApiCall } from "./utils/Api";

export class Posts extends ApiCall {
  all(params = {}): Promise<PostList> {
    return this.getData<PostList>("/post/all/", params);
  }

  get(id: string, slug: string): Promise<Post> {
    return this.getData<Post>(`/post/${id}/${slug}/view/`);
  }

  next(url: string): Promise<PostList> {
    return this.getPage<PostList>(url);
  }

  previous(url: string): Promise<PostList> {
    return this.getPage<PostList>(url);
  }
}
