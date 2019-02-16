import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SimpleComponent from './SimpleComponent';
import { getRoom } from './fake-backend';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';

const initialState = {room: {}}

const store = createStore(reducers, initialState, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
    	<SimpleComponent/>
    </Provider>,
    document.getElementById('app')
);