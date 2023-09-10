import {enableMapSet, immerable} from 'immer';
import HasId from './HasId';

enableMapSet();

export default class StateById<Type extends HasId> {
  [immerable] = true;
  public byId: {[id: string]: Type} = {};

  public get allIds() {
    return Object.keys(this.byId);
  }

  constructor(values: Array<Type>) {
    values.forEach(value => this.insert(value));
  }

  public get(item: Type): Type {
    return this.byId[item.id];
  }

  public getAll(): Array<Type> {
    return Array.from(Object.values(this.byId));
  }

  public getById(id: string): Type {
    return this.byId[id];
  }
  public getIds(): ReadonlyArray<string> {
    return this.allIds;
  }

  public insert(value: Type) {
    this.byId[value.id] = value;
  }

  public remove(value: Type) {
    delete this.byId[value.id];
  }
}
