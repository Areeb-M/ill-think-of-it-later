import List from './List';
import HasId from '../HasId';

export default class ListsManager extends HasId {
  public lists: Array<string> = [];

  public addList(list: List): number {
    return this.lists.push(list.id);
  }

  public removeList(list: List) {
    const index: number = this.lists.indexOf(list.id);
    this.lists.splice(index, 1)[0];
  }

  public getList(index: number): string {
    return this.lists.slice(index, index)[0];
  }
}
