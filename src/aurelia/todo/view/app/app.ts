import { connect } from 'redux-app';
import { App } from '../../viewModel';

export class AppView {
    
    @connect
    public vm: App;
}