import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducer  from './reducers';


const rootReducer = combineReducers({
    control: reducer
});


const middlewares = [];

if (process.env.NODE_ENV==='development') {
    middlewares.push(logger)
};

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

