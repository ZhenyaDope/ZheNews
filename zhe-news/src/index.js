import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
