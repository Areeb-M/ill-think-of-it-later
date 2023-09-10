import ListItem from './ListItem';
import HasId from '../HasId';

export default class List extends HasId {
  public items: Array<string> = [];

  constructor(
    public name: string,
    public active: boolean,
    uuid?: string
  ) {
    super(uuid);
    this.name = name;
    this.active = active;
  }

  public addItem(item: ListItem): number {
    return this.items.push(item.id);
  }
}
