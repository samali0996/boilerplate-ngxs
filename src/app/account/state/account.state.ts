import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';
import {Account} from '../action/account.action';
import {AccountStateModel, defaults} from '../models/account.model';

@State<AccountStateModel>({
  name: 'account',
  defaults,
})
@Injectable({providedIn: 'root'})
export class AccountState {
  @Action(Account.AddOrUpdate)
  add(
    {getState, patchState}: StateContext<AccountStateModel>,
    {payload}: Account.AddOrUpdate
  ) {
    const state = getState();
    patchState({
      map: {...state.map, [payload.id]: payload},
    });
  }

  @Action(Account.Clear)
  clear({setState}: StateContext<AccountStateModel>) {
    setState({...defaults});
  }

  @Action(Account.RemoveByIds)
  removeByIds(
    {getState, setState}: StateContext<AccountStateModel>,
    {payload}: Account.RemoveByIds
  ) {
    const state = getState();
    payload.forEach(id => {
      delete state.map[id];
    });
    setState(state);
  }
}
