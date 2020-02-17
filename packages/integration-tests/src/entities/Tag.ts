import { EntityManager } from "../../../orm/src";
import { TagCodegen, TagOpts } from "./entities";

export class Tag extends TagCodegen {
  constructor(em: EntityManager, opts: TagOpts) {
    super(em, opts);
  }
}