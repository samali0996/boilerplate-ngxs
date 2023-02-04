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
  MOCK_FEE_ITEM_4,
  MOCK_FEE_STATE,
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

  it('should clear map', () => {
    store.reset({
      fees: {...MOCK_FEE_STATE},
    });
    store.dispatch(new Fees.Clear());
    expect(store.selectSnapshot(FeesSelector.getFeesMap)).toEqual(defaults.map);
  });

  it('deletes by Id', () => {
    store.reset({
      fees: {
        map: {
          ...MOCK_EXPECTED_FEES_MAPPING,
          [MOCK_FEE_ITEM_4.id]: MOCK_FEE_ITEM_4,
        },
      },
    });
    store.dispatch(new Fees.RemoveByIds([MOCK_FEE_ITEM_4.id]));
    expect(store.selectSnapshot(FeesSelector.getFeesMap)).toEqual(
      MOCK_EXPECTED_FEES_MAPPING
    );
  });
  it('delete Id not found', () => {
    store.reset({
      fees: {
        map: {
          ...MOCK_EXPECTED_FEES_MAPPING,
        },
      },
    });
    store.dispatch(new Fees.RemoveByIds(['ddsaudn']));
    expect(store.selectSnapshot(FeesSelector.getFeesMap)).toEqual(
      MOCK_EXPECTED_FEES_MAPPING
    );
  });
  it('delete Ids some found', () => {
    store.reset({
      fees: {
        map: {
          ...MOCK_EXPECTED_FEES_MAPPING,
          [MOCK_FEE_ITEM_4.id]: MOCK_FEE_ITEM_4,
        },
      },
    });
    store.dispatch(new Fees.RemoveByIds(['ddsaudn', MOCK_FEE_ITEM_4.id]));
    expect(store.selectSnapshot(FeesSelector.getFeesMap)).toEqual(
      MOCK_EXPECTED_FEES_MAPPING
    );
  });
  it('delete Ids some found', () => {
    store.reset({
      fees: {
        map: {
          ...MOCK_EXPECTED_FEES_MAPPING,
          [MOCK_FEE_ITEM_4.id]: MOCK_FEE_ITEM_4,
        },
      },
    });
    store.dispatch(
      new Fees.RemoveByIds(['ddsaudn', MOCK_FEE_ITEM_4.id, MOCK_FEE_ITEM_2.id])
    );
    expect(store.selectSnapshot(FeesSelector.getFeesMap)).toEqual({
      [MOCK_FEE_ITEM_1.id]: MOCK_FEE_ITEM_1,
    });
  });
});
