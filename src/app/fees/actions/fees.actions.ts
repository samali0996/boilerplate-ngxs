import {FeeModel} from '../models/fees.model';

export namespace Fees {
  export class AddOrUpdate {
    static readonly type = '[Fees] AddOrUpdate';
    constructor(public payload: FeeModel) {}
  }
}
