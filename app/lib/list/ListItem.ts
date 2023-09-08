export default class ListItem {
  name: string;
  description: string;
  fulfilled: boolean;

  constructor(name: string, description: string, fulfilled: boolean) {
    this.name = name;
    this.description = description;
    this.fulfilled = fulfilled;
  }
}
