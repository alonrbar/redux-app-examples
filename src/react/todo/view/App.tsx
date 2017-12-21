import * as React from 'react';
import { connect } from 'redux-app';
import ExampleFrame from '../../ExampleFrame';
import { App } from '../state';
import { AddTodoView } from './AddTodo';
import Footer from './Footer';
import VisibleTodoListView from './VisibleTodoList';

export default class AppView extends React.Component {

    @connect
    public app: App;

    public render() {
        return <ExampleFrame title={this.app.title} subtitle={this.app.subtitle}>
            <div className="card mt-5 w-50">
                <div className="card-body">
                    <AddTodoView addTodo={txt => this.app.todoList.addTodo(txt)} />
                    <br />
                    <VisibleTodoListView />
                    <Footer />
                </div>
            </div>
        </ExampleFrame>;
    }
}