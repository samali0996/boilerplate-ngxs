import {AccountModel} from '../models/account.model';

export namespace Account {
  export class AddOrUpdate {
    static readonly type = '[Account] AddOrUpdate';
    constructor(public payload: AccountModel) {}
  }
  export class Clear {
    static readonly type = '[Account] Clear';
  }

  export class RemoveByIds {
    static readonly type = '[Account] RemoveById';
    constructor(public payload: string[]) {}
  }
}
