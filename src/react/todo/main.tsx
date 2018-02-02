require('../polyfill');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { App } from './state';
import AppView from './view/App';

ReduxApp.options.logLevel = LogLevel.Debug;
const app = ReduxApp.createApp(new App(), devToolsEnhancer(undefined));

ReactDOM.render(
    <Provider store={app.store}>
        <AppView />
    </Provider>,
    document.getElementById('content-root')
);