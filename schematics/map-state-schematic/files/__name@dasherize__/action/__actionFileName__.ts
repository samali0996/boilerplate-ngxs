import {<%= modelName %>} from '../model/<%= modelFileName%>'

export namespace <%= actionName %> {

    export class AddOrUpdate {
        static readonly type = '[<%= actionName %>] AddOrUpdate';
        constructor(public payload: <%= modelName %>){}
    }

    export class Clear {
        static readonly type = '[<%= actionName %>] Clear';
    }

    export class RemoveByIds {
        static readonly type = '[<%= actionName %>] RemoveByIds';
        constructor(public payload: string[]) {}
    }
}