import { QueryParam, Tag, TagList } from "./types/type";
import { ApiCall } from "./utils/Api";

export class Tags extends ApiCall {
  all(params: QueryParam = {}): Promise<TagList> {
    return this.getData<TagList>("/tag/all/", params);
  }

  get(id: string): Promise<Tag> {
    return this.getData<Tag>(`/tag/${id}/view/`);
  }

  next(url: string): Promise<TagList> {
    return this.getPage<TagList>(url);
  }

  previous(url: string): Promise<TagList> {
    return this.getPage<TagList>(url);
  }
}
