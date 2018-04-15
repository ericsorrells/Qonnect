import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import eventsReducer from '../reducers/Events_Reducers';
import profileReducer from '../reducers/Profile_Reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      profile: profileReducer
    }),
    composeEnhancers(applyMiddleware())
  )
  return store;
}