import {TestBed} from '@angular/core/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {FeesState} from './fees.state';
import {FeesSelector} from '../selectors/fees.selector';
import {Fees} from '../actions/fees.actions';
import {defaults} from '../models/fees.model';

describe('Fees actions', () => {
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FeesState])],
    }).compileComponents();
  });
  beforeEach(() => {
    store = TestBed.inject(Store);
    store.reset({fees: {...defaults}});
  });

  it('should create an action and add an item', () => {
    store.dispatch(new Fees.AddOrUpdate({id: 'item_1', fee: 0}));
    store.dispatch(new Fees.AddOrUpdate({id: 'item_2', fee: 2.24}));
    const items = store.selectSnapshot(FeesSelector.getFeesMap);

    expect(items).toEqual({
      item_1: {id: 'item_1', fee: 0},
      item_2: {id: 'item_2', fee: 2.24},
    });
  });
  it('should create an action and update an item', () => {
    store.dispatch(new Fees.AddOrUpdate({id: 'item_1', fee: 1}));
    store.dispatch(new Fees.AddOrUpdate({id: 'item_2', fee: 2.24}));

    expect(store.selectSnapshot(FeesSelector.getFeesMap)).toEqual({
      item_1: {id: 'item_1', fee: 1},
      item_2: {id: 'item_2', fee: 2.24},
    });
    store.dispatch(new Fees.AddOrUpdate({id: 'item_2', fee: 99}));

    expect(store.selectSnapshot(FeesSelector.getFeesMap)).toEqual({
      item_1: {id: 'item_1', fee: 1},
      item_2: {id: 'item_2', fee: 99},
    });
  });

  // it('should add multiple fees action', () => {
  //   store.dispatch(new Fees.MultiAdd([{id: 'item_1'}, {id: 'item_2'}]));
  //   const items = store.selectSnapshot(FeesSelector.getFees);

  //   expect(items).toEqual({item_1: {id: 'item_1'}, item_2: {id: 'item_2'}});
  // });
});
