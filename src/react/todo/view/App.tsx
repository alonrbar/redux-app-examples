import * as React from 'react';
import { connect } from 'redux-app';
import { App } from '../state';
import { AddTodoView } from './AddTodo';
import TodoListView from './todolist';

export default class AppView extends React.Component {

    @connect
    public app: App;

    public render() {
        return <div>
            <AddTodoView addTodo={txt => this.app.todoList.addTodo(txt)} />
            <TodoListView />            
        </div>;
    }
}