
import { createStore, applyMiddleware, compose } from '../../../../../../../../Users/ashokkumar/Library/Caches/typescript/2.8/node_modules/redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState,compose (
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;