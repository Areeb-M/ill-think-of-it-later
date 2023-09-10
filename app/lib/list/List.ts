import {immerable} from 'immer';
import ListItem from './ListItem';
import HasId from '../HasId';

export default class List extends HasId {
  [immerable] = true;

  constructor(
    public name: string,
    public active: boolean,
    public items: Array<ListItem>,
    uuid?: string
  ) {
    super(uuid);
    this.name = name;
    this.items = items;
    this.active = active;
  }

  public get itemsLeft(): number {
    let count: number = 0;

    this.items.forEach((item: ListItem) => {
      if (!item.fulfilled) count += 1;
    });

    return count;
  }

  public addItem(item: ListItem): number {
    return this.items.push(item);
  }
}
