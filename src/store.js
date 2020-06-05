import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import assignmentReducer from './reducers/assignmentReducer';
import studentReducer from './reducers/studentReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  assignments: assignmentReducer,
  students: studentReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
