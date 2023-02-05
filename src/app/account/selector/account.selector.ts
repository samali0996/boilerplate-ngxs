import {Selector} from '@ngxs/store';
import { AccountModel, AccountStateModel } from '../models/account.model';
import { AccountState } from '../state/account.state';

export class AccountSelector {
  @Selector([AccountState])
  static getAccountMap(state: AccountStateModel): Record<string, AccountModel> {
    return state.map;
  }

  @Selector([AccountSelector.getAccountMap])
  static getAccountById(
    map: Record<string, AccountModel>
  ): (id: string) => AccountModel | null {
    return id => map[id] ?? null;
  }
}
