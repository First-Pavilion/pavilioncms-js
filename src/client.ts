import { Tags } from "./lib/Tags";
import { ReadToken } from "./lib/types/type";
import { Categories } from "./lib/Category";
import { Posts } from "./lib/Posts";
import { Authors } from "./lib/Authors";

abstract class Client {
  public tags: Tags;
  public category: Categories;
  public posts: Posts;
  public authors: Authors;

  constructor(readToken: ReadToken) {
    this.tags = new Tags(readToken);
    this.category = new Categories(readToken);
    this.posts = new Posts(readToken);
    this.authors = new Authors(readToken);
  }
}

export class PavilionCMS extends Client {}
