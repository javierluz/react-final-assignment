import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import todosReducer from './modules/todos';

const rootReducer = combineReducers({
    todos: todosReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
