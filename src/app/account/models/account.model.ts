export type AccountModel = {
    id: string
}

export type AccountStateModel = {map: Record<string, AccountModel>};

export const defaults: AccountStateModel = {
    map: {},
};