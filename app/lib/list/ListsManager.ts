import {immerable} from 'immer';
import List from './List';
import HasId from '../HasId';

export default class ListsManager extends HasId {
  [immerable] = true;

  constructor(
    public lists: Array<List>,
    uuid?: string
  ) {
    super(uuid);
    this.lists = lists;
  }

  public addList(list: List): number {
    return this.lists.push(list);
  }

  public removeList(list: List): List {
    const index: number = this.lists.indexOf(list);
    return this.lists.splice(index, 1)[0];
  }

  public getList(index: number): List {
    return this.lists.slice(index, index)[0];
  }

  public updateList(list: List): List {
    const index: number = this.lists.indexOf(list);
    return this.lists.splice(index, 1, list)[0];
  }
}
