import {FeeModel} from '../models/fees.model';

export namespace Fees {
  export class AddOrUpdate {
    static readonly type = '[Fees] AddOrUpdate';
    constructor(public payload: FeeModel) {}
  }
  export class Clear {
    static readonly type = '[Fees] Clear';
  }

  export class RemoveByIds {
    static readonly type = '[Fees] RemoveById';
    constructor(public payload: string[]) {}
  }
}
