import HasId from '../HasId';

export default class ListItem extends HasId {
  name: string;
  description: string;
  fulfilled: boolean;

  constructor(
    name: string,
    description: string,
    fulfilled: boolean,
    uuid?: string
  ) {
    super(uuid);
    this.name = name;
    this.description = description;
    this.fulfilled = fulfilled;
  }
}
