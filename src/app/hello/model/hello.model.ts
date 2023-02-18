export type HelloModel = {
    id: string;
}

export type HelloStateModel = {map: Record<string, HelloModel>};

export const defaults: HelloStateModel = {
    map: {},
}