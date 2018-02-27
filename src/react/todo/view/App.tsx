import * as React from 'react';
import { autoSync } from '../../autoSync';
import { ExampleFrame } from '../../ExampleFrame';
import { AppState } from '../state';
import { AddTodo } from './AddTodo';
import { Footer } from './Footer';
import { VisibleTodoList } from './VisibleTodoList';

const App: React.SFC<AppState> = (props) => (

    <ExampleFrame title={props.title} subtitle={props.subtitle}>
        <div className="card mt-5 w-50">
            <div className="card-body">
                <AddTodo addTodo={txt => props.todoList.addTodo(txt)} />
                <br />
                <VisibleTodoList />
                <Footer />
            </div>
        </div>
    </ExampleFrame>
);

const connected = autoSync(AppState)(App);
export { connected as App };