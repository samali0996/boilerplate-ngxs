import {TestBed} from '@angular/core/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {FeesState} from './fees.state';
import {FeesSelector} from '../selectors/fees.selector';
import {Fees} from '../actions/fees.actions';
import {defaults} from '../models/fees.model';
import {
  MOCK_EXPECTED_FEES_MAPPING,
  MOCK_FEE_ITEM_1,
  MOCK_FEE_ITEM_2,
  MOCK_NEW_FEE_ITEM_1,
} from '../models/fees.model.mock';

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
    store.dispatch(new Fees.AddOrUpdate(MOCK_FEE_ITEM_1));
    store.dispatch(new Fees.AddOrUpdate(MOCK_FEE_ITEM_2));
    const items = store.selectSnapshot(FeesSelector.getFeesMap);

    expect(items).toEqual(MOCK_EXPECTED_FEES_MAPPING);
  });
  it('should create an action and update an item', () => {
    store.dispatch(new Fees.AddOrUpdate(MOCK_FEE_ITEM_1));
    store.dispatch(new Fees.AddOrUpdate(MOCK_FEE_ITEM_2));

    expect(store.selectSnapshot(FeesSelector.getFeesMap)).toEqual(
      MOCK_EXPECTED_FEES_MAPPING
    );
    store.dispatch(new Fees.AddOrUpdate(MOCK_NEW_FEE_ITEM_1));

    expect(store.selectSnapshot(FeesSelector.getFeesMap)).toEqual({
      ...MOCK_EXPECTED_FEES_MAPPING,
      [MOCK_NEW_FEE_ITEM_1.id]: MOCK_NEW_FEE_ITEM_1,
    });
  });
});
