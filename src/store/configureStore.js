// ========================================================================================
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// ========================================================================================
import eventsReducer       from '../reducers/Events_Reducers';
import profileReducer      from '../reducers/Profile_Reducer';
import acceptancesReducer  from '../reducers/Acceptances_Reducer';
import filtersReducer      from '../reducers/Filters_Reducer';
import authReducer         from '../reducers/Auth_Reducer';
// ========================================================================================

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      profile:     profileReducer,
      events:      eventsReducer,
      acceptances: acceptancesReducer,
      filters:     filtersReducer,
      auth:        authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store;
}