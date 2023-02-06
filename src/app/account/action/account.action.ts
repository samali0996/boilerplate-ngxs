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

  export class MyNewAction {
    static readonly type = '[Account] MyNewAction';
  }

  export class NewAction {
    static readonly type = '[Account] NewAction';
  }

  export class HelloThere {
    static readonly type = '[Account] HelloThere';
  }

  export class Actionnn {
    static readonly type = '[Account] Actionnn';
  }

  export class NewestAction {
    static readonly type = '[Account] NewestAction';
    constructor(public payload: string[]) {}
  }
}
