import {Injectable} from '@angular/core';
import {State, Action, StateContext} from '@ngxs/store';
import {HelloAction} from '../action/hello.action';
import {HelloStateModel, defaults} from '../model/hello.model';

@State<HelloStateModel>({
  name: 'hello',
  defaults,
})
@Injectable({providedIn: 'root'})
export class HelloState {
  @Action(HelloAction.AddOrUpdate)
  add(
    {getState, patchState}: StateContext<HelloStateModel>,
    {payload}: HelloAction.AddOrUpdate
  ) {
    const state = getState();
    patchState({
      map: {...state.map, [payload.id]: payload},
    });
  }
}
