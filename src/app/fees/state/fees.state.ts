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

  // this can be a facade thing
  // @Action(Fees.MultiAdd)
  // addFeesAction(
  //   {dispatch}: StateContext<FeesStateModel>,
  //   {payload}: Fees.MultiAdd
  // ) {
  //   const feeActions: Fees.AddOrUpdate[] = [];
  //   payload.forEach(fee => {
  //     feeActions.push(new Fees.AddOrUpdate(fee));
  //   });
  //   dispatch(feeActions);
  // }
}
