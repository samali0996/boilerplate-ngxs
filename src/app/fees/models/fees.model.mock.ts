import {FeeModel, FeesStateModel} from './fees.model';

export const MOCK_FEE_ITEM_1: FeeModel = {
  id: 'item_1',
  fee: 0,
  additionalFee: null,
  scheduledStartDate: new Date(),
  tax: {
    name: 'hst',
    percent: 2,
  },
};

export const MOCK_NEW_FEE_ITEM_1: FeeModel = {
  id: 'item_1',
  fee: 2.4,
  additionalFee: 2,
  scheduledStartDate: null,
  tax: {
    name: 'gst',
    percent: 2,
  },
};

export const MOCK_FEE_ITEM_2: FeeModel = {
  id: 'item_2',
  fee: 2.24,
  additionalFee: null,
  scheduledStartDate: null,
  tax: {
    name: 'gst',
    percent: 4,
  },
};

export const MOCK_FEE_ITEM_4: FeeModel = {
  id: 'item_4',
  fee: 6,
  additionalFee: 6,
  scheduledStartDate: null,
  tax: {
    name: 'hst',
    percent: 22,
  },
};

export const MOCK_EXPECTED_FEES_MAPPING: Record<string, FeeModel> = {
  [MOCK_FEE_ITEM_1.id]: MOCK_FEE_ITEM_1,
  [MOCK_FEE_ITEM_2.id]: MOCK_FEE_ITEM_2,
};

export const MOCK_FEE_STATE: FeesStateModel = {
  map: MOCK_EXPECTED_FEES_MAPPING,
};
