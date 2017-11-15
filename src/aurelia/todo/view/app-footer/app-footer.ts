import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { VisibilityFilterValue } from '../../viewModel';

@customElement('app-footer')
export class AppFooterElement {

    @connect
    public filter: VisibilityFilterValue;
}