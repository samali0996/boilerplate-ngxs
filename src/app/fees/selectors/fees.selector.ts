import {Selector} from '@ngxs/store';
import {FeeModel, FeesStateModel} from '../models/fees.model';
import {FeesState} from '../state/fees.state';

export class FeesSelector {
  @Selector([FeesState])
  static getFeesMap(state: FeesStateModel): Record<string, FeeModel> {
    return state.map;
  }

  @Selector([FeesSelector.getFeesMap])
  static getFeeById(
    map: Record<string, FeeModel>
  ): (id: string) => FeeModel | null {
    return id => map[id] ?? null;
  }
}
