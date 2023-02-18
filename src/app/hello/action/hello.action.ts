import {HelloModel} from '../model/hello.model'

export namespace HelloAction {

    export class AddOrUpdate {
        static readonly type = '[HelloAction] AddOrUpdate';
        constructor(public payload: HelloModel){}
    }

    export class Clear {
        static readonly type = '[HelloAction] Clear';
    }

    export class RemoveByIds {
        static readonly type = '[HelloAction] RemoveByIds';
        constructor(public payload: string[]) {}
    }
}