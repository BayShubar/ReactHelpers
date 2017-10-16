import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import Reducers from './store/Reducers'
import App from './App';

const store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
			<Provider store = {store}>
				<App />
			</Provider>,
			document.getElementById('root')
	);
registerServiceWorker();