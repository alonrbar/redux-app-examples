import * as React from 'react';
import { Todo } from '../state';

interface TodoProps {
    todo: Todo;
    onClick: () => void;
}

export const TodoView = ({ onClick, todo }: TodoProps) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
        }}
    >
        {todo.text}
    </li>
);