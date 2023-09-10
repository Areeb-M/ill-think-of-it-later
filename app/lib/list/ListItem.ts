import HasId from '../HasId';

export default class ListItem extends HasId {
  constructor(
    public name: string,
    public description: string,
    public fulfilled: boolean,
    uuid?: string
  ) {
    super(uuid);
    this.name = name;
    this.description = description;
    this.fulfilled = fulfilled;
  }
}
