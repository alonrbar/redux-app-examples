require('../polyfill');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { AppState } from './state';
import { App } from './view/App';

ReduxApp.options.logLevel = LogLevel.Debug;
const app = ReduxApp.createApp(new AppState(), devToolsEnhancer(undefined));

ReactDOM.render(
    <Provider store={app.store}>
        <App />
    </Provider>,
    document.getElementById('content-root')
);