import * as React from 'react';
import { connect } from 'redux-app';
import { autoSync } from '../../autoSync';
import { App, VisibleTodoListState } from '../state';
import { Todo } from './Todo';

const VisibleTodoList: React.SFC<VisibleTodoListState> = (props) => (
    <ul>
        {props.visibleTodos.map(todo => (
            <Todo key={todo.id} onClick={() => props.toggleTodo(todo.id)} todo={todo}></Todo>
        ))}
    </ul>
);

const connected = autoSync(VisibleTodoListState)(VisibleTodoList);
export { connected as VisibleTodoList };