// ========================================================================================
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
// ========================================================================================
import eventsReducer       from '../reducers/Events_Reducers';
import profileReducer      from '../reducers/Profile_Reducer';
import acceptancesReducer  from '../reducers/Acceptances_Reducer';
import filtersReducer      from '../reducers/Filters_Reducer';
import authReducer         from '../reducers/Auth_Reducer';
import loadingReducer      from '../reducers/Loading_Reducer';
import { mainSaga }        from '../sagas/mainSaga';
// ========================================================================================
console.log('CONFIGURE_STORE')
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, sagaMiddleware];

const mainReducer = combineReducers({
      profile:     profileReducer,
      events:      eventsReducer,
      acceptances: acceptancesReducer,
      filters:     filtersReducer,
      auth:        authReducer,
      loading:     loadingReducer
    })

  const store = createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )

sagaMiddleware.run(mainSaga);

export default store;