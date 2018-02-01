require('../polyfill');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LogLevel, ReduxApp } from 'redux-app';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { GladiatorsAppState } from './state/gladiatorsApp';
import { App } from './view/app';

//
// bootstrap the application state
//

ReduxApp.options.logLevel = LogLevel.Debug;
const app = new ReduxApp(new GladiatorsAppState(), devToolsEnhancer(undefined));

//
// bootstrap react
//

ReactDOM.render(
    <Provider store={app.store}>
        <App />
    </Provider>,
    document.getElementById('content-root')
);