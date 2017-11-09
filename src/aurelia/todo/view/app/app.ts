import { connect } from 'redux-app';
import { App } from '../../view-model';

export class AppView {
    
    @connect
    public vm: App;
}