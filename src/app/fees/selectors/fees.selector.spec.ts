import {
  MOCK_EXPECTED_FEES_MAPPING,
  MOCK_FEE_ITEM_1,
  MOCK_FEE_ITEM_4,
  MOCK_FEE_STATE,
} from '../models/fees.model.mock';
import {FeesSelector} from './fees.selector';

describe('fees.selector', () => {
  it('getFeesMap', () => {
    const result = FeesSelector.getFeesMap(MOCK_FEE_STATE);
    expect(result).toEqual(MOCK_EXPECTED_FEES_MAPPING);
  });
  it('getFeesMap EMPTY', () => {
    const result = FeesSelector.getFeesMap({
      map: {},
    });
    expect(result).toEqual({});
  });
  it('getFeeById', () => {
    const result = FeesSelector.getFeeById(MOCK_EXPECTED_FEES_MAPPING)(
      MOCK_FEE_ITEM_1.id
    );
    expect(result).toEqual(MOCK_FEE_ITEM_1);
  });
  it('getFeeById 2', () => {
    const result = FeesSelector.getFeeById({
      ...MOCK_EXPECTED_FEES_MAPPING,
      [MOCK_FEE_ITEM_4.id]: MOCK_FEE_ITEM_4,
    })(MOCK_FEE_ITEM_4.id);
    expect(result).toEqual(MOCK_FEE_ITEM_4);
  });
  it('getFeeById not found', () => {
    const result = FeesSelector.getFeeById(MOCK_EXPECTED_FEES_MAPPING)(
      'fdubisdfohuisdshf'
    );
    expect(result).toEqual(null);
  });
});
