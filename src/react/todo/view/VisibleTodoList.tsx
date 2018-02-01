import * as React from 'react';
import { connect } from 'redux-app';
import { autoSync } from '../../autoSync';
import { syncOn } from '../../syncOn';
import { App, VisibleTodoList } from '../state';
import { TodoView } from './todo';

@autoSync(VisibleTodoList)
export class VisibleTodoListView extends React.Component<any> {

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