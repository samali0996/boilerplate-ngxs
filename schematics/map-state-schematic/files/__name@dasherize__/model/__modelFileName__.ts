export type <%= modelName %> = {
    id: string;
}

export type <%= stateModelName %> = {map: Record<string, <%= modelName %>>};

export const defaults: <%= stateModelName %> = {
    map: {},
}