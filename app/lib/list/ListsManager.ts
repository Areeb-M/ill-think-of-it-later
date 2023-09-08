import List from "./List";

export default class ListsManager {
  lists: ReadonlyArray<List>;

  constructor(lists: Array<List>) {
    this.lists = lists;
  }

  public addList(list: List) {
    return new ListsManager(this.lists.concat([list]));
  }
}
