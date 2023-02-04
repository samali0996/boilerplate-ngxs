export type FeeModel = {
  id: string;
  fee: number;
};

export type FeesStateModel = {map: Record<string, FeeModel>};

export const defaults: FeesStateModel = {
  map: {},
};
