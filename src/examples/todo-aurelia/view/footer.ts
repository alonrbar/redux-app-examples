import { customElement } from 'aurelia-framework';
import { connect } from 'redux-app';
import { VisibilityFilterValue } from '../../todo-view-model/visibilityFilter';

@customElement('app-footer')
export class TodoListFooterView {

    @connect
    public filter: VisibilityFilterValue;
}