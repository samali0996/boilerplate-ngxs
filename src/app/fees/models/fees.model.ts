export type FeeModel = {
  id: string;
  fee: number;
  additionalFee: number | null;
  scheduledStartDate: Date | null;
  tax: Tax;
};

type Tax = {
  name: 'hst' | 'gst';
  percent: number;
};

export type FeesStateModel = {map: Record<string, FeeModel>};

export const defaults: FeesStateModel = {
  map: {},
};
