import { PLATFORM, viewResources } from 'aurelia-framework';
import { App as AppViewModel } from './app';
import { connect } from 'redux-app';

@viewResources(PLATFORM.moduleName('./addTodo'))
export class App {
    
    @connect
    public vm: AppViewModel;
}