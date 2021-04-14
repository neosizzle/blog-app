//front end related code

import React from 'react';
import ReactDom from 'react-dom';

//import root root component
import App from './App';

//redux provided needed for global store
import {Provider} from 'react-redux';
import { createStore , applyMiddleware, compose }from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

//global styles
import "./index.css";

//initialize global store
const store = createStore( reducers , compose(applyMiddleware(thunk)))



ReactDom.render(
<Provider store = {store}>
    <App></App>
</Provider> , document.getElementById('root'));
