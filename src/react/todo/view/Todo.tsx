import * as React from 'react';
import { TodoState } from '../state';

interface TodoProps {
    todo: TodoState;
    onClick: () => void;
}

export const Todo = ({ onClick, todo }: TodoProps) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
        }}
    >
        {todo.text}
    </li>
);