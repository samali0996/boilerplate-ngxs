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
    static readonly type = '[Account] RemoveByIds';
    constructor(public payload: string[]) {}
  }

  /* PLOP APPEND MARKER. DO NOT DELETE! */
  export class NewAction2 {
    static readonly type = '[Account] NewAction2';
  }
  export class Newaction1 {
    static readonly type = '[Account] Newaction1';
  }
}
