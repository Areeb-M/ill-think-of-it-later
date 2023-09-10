import {enableMapSet, immerable} from 'immer';
import HasId from './HasId';

enableMapSet();

export default class StateById<Type extends HasId> {
  [immerable] = true;
  public byId: {[id: string]: Type} = {};
  public allIds: Set<string> = new Set();

  constructor(values: Array<Type>) {
    values.forEach(value => this.insert(value));
  }

  public get(item: Type): Type {
    return this.byId[item.id];
  }

  public getAll(): Array<Type> {
    return Array.from(this.allIds).map(id => this.byId[id]);
  }

  public getById(id: string): Type {
    return this.byId[id];
  }
  public getIds(): ReadonlySet<string> {
    return this.allIds;
  }

  public insert(value: Type) {
    this.byId[value.id] = value;
    this.allIds.add(value.id);
  }

  public remove(value: Type) {
    this.allIds.delete(value.id);
    delete this.byId[value.id];
  }
}
