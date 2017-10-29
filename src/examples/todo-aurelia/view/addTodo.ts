import { customElement } from 'aurelia-framework';
import { TodoList } from '../../todo-view-model/todoList';
import { connect } from 'redux-app';

@customElement('add-todo')
export class AddTodo {
    
    public text: string;

    @connect
    private todoList: TodoList;
}