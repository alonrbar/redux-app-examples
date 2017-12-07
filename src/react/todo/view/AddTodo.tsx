import * as React from 'react';

interface AddTodoProps {
    addTodo: (text: string) => void;
}

export const AddTodoView = ({ addTodo }: AddTodoProps) => {
    let input: HTMLInputElement;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    addTodo(input.value);
                    input.value = '';
                }}
            >
                <input
                    ref={node => {
                        input = node;
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};