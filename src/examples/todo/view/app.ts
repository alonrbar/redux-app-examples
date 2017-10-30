import { PLATFORM, viewResources } from 'aurelia-framework';
import { connect } from 'redux-app';
import { App } from '../view-model/app';

@viewResources(
    PLATFORM.moduleName('./footer'),
    PLATFORM.moduleName('./visibleTodoList')
)
export class AppView {
    
    @connect
    public vm: App;
}