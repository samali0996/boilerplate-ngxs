export type FeeModel = {
  id: string;
  fee: number;
  additionalFee: number | null;
};

export type FeesStateModel = {map: Record<string, FeeModel>};

export const defaults: FeesStateModel = {
  map: {},
};
