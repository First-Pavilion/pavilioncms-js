import { Tags } from "./lib/Tags";
import { Config } from "./lib/types/Config";

abstract class Client {
  public tags: Tags;

  constructor(config: Config) {
    this.tags = new Tags(config);
  }
}

export class PavilionCMS extends Client {}
