// ========================================================================================
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// ========================================================================================
import eventsReducer   from '../reducers/Events_Reducers';
import profileReducer  from '../reducers/Profile_Reducer';
import commentsReducer from '../reducers/Comments_Reducer';
// ========================================================================================

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      profile: profileReducer,
      events: eventsReducer,
      comments: commentsReducer
    }),
    composeEnhancers(applyMiddleware())
  )
  return store;
}