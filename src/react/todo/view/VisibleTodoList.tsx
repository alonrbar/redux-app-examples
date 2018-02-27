import * as React from 'react';
import { autoSync } from '../../autoSync';
import { AppState, VisibleTodoListState } from '../state';
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