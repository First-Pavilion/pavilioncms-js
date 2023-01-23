import { Tag, TagList } from "./types/Tags";
import { Client } from "src/client";


export class Tags extends Client {
    all(): Promise<TagList> {
        return this.invoke<TagList>("/tag/all/");
    }

    get(id: string): Promise<Tag> {
        return this.invoke<Tag>(`/tag/${id}/view/`);
    }

}

