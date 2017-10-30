import { PLATFORM, viewResources } from 'aurelia-framework';
import { App as AppViewModel } from '../../todo-view-model/app';
import { connect } from 'redux-app';

@viewResources(
    PLATFORM.moduleName('./footer'),
    PLATFORM.moduleName('./visibleTodoList')
)
export class AppView {
    
    @connect
    public vm: AppViewModel;
}