import ListItem from "./ListItem";

export default class List {
  name: string;
  items: Array<ListItem>;
  active: boolean;

  constructor(name: string, items: Array<ListItem>, active: boolean) {
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
}
