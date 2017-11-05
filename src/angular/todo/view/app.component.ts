import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { App } from '../view-model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    @connect
    public vm: App;
}