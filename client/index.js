import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from './app/Router';
import configureStore  from "./app/Store";

const store = configureStore();

render(<Provider store={store}>
        <Router/>
       </Provider>, 
    document.getElementById('root'))