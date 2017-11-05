import { Component } from '@angular/core';
import { connect } from 'redux-app';
import { VisibilityFilterValue } from '../view-model';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {

    @connect
    public filter: VisibilityFilterValue;
}