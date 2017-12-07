import * as React from 'react';
import { connect } from 'redux-app';
import { syncOn } from '../../syncOn';
import { App, VisibleTodoList } from '../state';
import { TodoView } from './todo';

class VisibleTodoListView extends React.Component<any> {

    @connect
    public st: VisibleTodoList;

    public render() {
        return (
            <ul>
                {this.st.visibleTodos.map(todo => (
                    <TodoView key={todo.id} onClick={() => this.st.toggleTodo(todo.id)} todo={todo}></TodoView>
                ))}
            </ul>
        );
    }
}

export default syncOn((app: App) => {
    return {
        todos: app.todoList.todos,
        filter: app.visibilityFilter.value
    };
})(VisibleTodoListView);