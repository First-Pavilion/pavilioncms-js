import { Author, AuthorList } from "./types/type";
import { ApiCall } from "./utils/Api";

export class Authors extends ApiCall {
  all(params = {}): Promise<AuthorList> {
    return this.getData<AuthorList>("/author/all/", params);
  }

  get(id: string): Promise<Author> {
    return this.getData<Author>(`/author/${id}/view/`);
  }

  next(url: string): Promise<AuthorList> {
    return this.getPage<AuthorList>(url);
  }

  previous(url: string): Promise<AuthorList> {
    return this.getPage<AuthorList>(url);
  }
}
