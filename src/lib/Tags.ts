import { Tag, TagList } from "./types/Tags";
import { ApiCall } from "./utils/Api";

export class Tags extends ApiCall {
  all(): Promise<TagList> {
    return this.invoke<TagList>("/tag/all/");
  }

  get(id: string): Promise<Tag> {
    return this.invoke<Tag>(`/tag/${id}/view/`);
  }
}
