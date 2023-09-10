import {v4 as uuidv4} from 'uuid';

export default class HasId {
  constructor(readonly uuid?: string) {
    if (!uuid) this.uuid = uuidv4();
    else this.uuid = uuid;
  }

  public get id(): string {
    return this.uuid!;
  }
}
