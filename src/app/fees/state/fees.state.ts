import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';
import {Fees} from '../actions/fees.actions';
import {FeesStateModel, defaults} from '../models/fees.model';

@State<FeesStateModel>({
  name: 'fees',
  defaults,
})
@Injectable({providedIn: 'root'})
export class FeesState {
  @Action(Fees.AddOrUpdate)
  addFeeAction(
    {getState, patchState}: StateContext<FeesStateModel>,
    {payload}: Fees.AddOrUpdate
  ) {
    const state = getState();
    patchState({
      map: {...state.map, [payload.id]: payload},
    });
  }
}
