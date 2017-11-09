import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { VisibilityFilterValue } from '../../view-model';

@customElement('app-footer')
export class AppFooterElement {

    @connect
    public filter: VisibilityFilterValue;
}