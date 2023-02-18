import {Injectable} from '@angular/core'
import {State, Action, StateContext} from '@ngxs/store';
import {<%= actionName %>} from '../action/<%= actionFileName%>'
import {<%= stateModelName %>, defaults} from '../model/<%=modelFileName%>'

@State<<%= stateModelName %>>({
    name: '<%= dasherize(name) %>',
    defaults,
}) 
@Injectable({providedIn: 'root'})
export class <%= stateName %> {
    @Action(<%= actionName %>.AddOrUpdate)
    add(
        {getState, patchState}: StateContext<<%=stateModelName%>>,
        {payload}: <%=actionName%>.AddOrUpdate
    ) {
        const state = getState();
        patchState({
        map: {...state.map, [payload.id]: payload},
        });
    }
}