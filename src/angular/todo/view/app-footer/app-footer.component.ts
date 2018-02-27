import { Component } from '@angular/core';
import { VisibilityFilterValue } from '../../viewModel';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html'
})
export class AppFooterComponent {

    // @connect
    public filter: VisibilityFilterValue;
}