import { Category, CategoryList } from "./types/type";
import { ApiCall } from "./utils/Api";

export class Categories extends ApiCall {
  all(params = {}): Promise<CategoryList> {
    return this.getData<CategoryList>("/category/all/", params);
  }

  get(id: string): Promise<Category> {
    return this.getData<Category>(`/category/${id}/view/`);
  }

  next(url: string): Promise<CategoryList> {
    return this.getPage<CategoryList>(url);
  }

  previous(url: string): Promise<CategoryList> {
    return this.getPage<CategoryList>(url);
  }
}
