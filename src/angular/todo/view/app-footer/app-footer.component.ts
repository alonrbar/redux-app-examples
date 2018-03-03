import { Component } from '@angular/core';
import { ReduxApp } from 'redux-app';
import { VisibilityFilterValue } from '../../viewModel';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {

    public filter = ReduxApp.getComponent(VisibilityFilterValue);
}