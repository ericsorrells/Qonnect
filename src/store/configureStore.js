import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import eventsReducer from '../reducers/Events_Reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer
    }),
    composeEnhancers(applyMiddleware())
  )
  return store;
}