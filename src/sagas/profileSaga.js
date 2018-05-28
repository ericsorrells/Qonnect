// ========================================================================================
import 'regenerator-runtime/runtime';
import { call, put, fork, take, select } from 'redux-saga/effects';
import { history } from '../router/AppRouter';
import { getProfileFromFirebase } from '../firebase/helpers/profileFirebase';
import { getProfile, setProfile } from '../actions/Profile_Actions';
import { auth } from '../firebase/firebaseIndex';
import { getEventsSaga } from './eventsSaga';
import { objToArray, getEventUserIDs } from '../utils/utils';
// ========================================================================================

function* getProfileSaga({ userId }) {
  yield put({ type: 'START_LOADING', loading: true })
  const userInfo = yield call(getProfileFromFirebase, userId);
  yield put(setProfile(userInfo));
  yield put({ type: 'GET_PROFILE_SUCCESS' });
  yield put({ type: 'START_GET_EVENTS', userId: userId });
  const userAcceptances = yield select(state => state.acceptances)
  // TODO: is this used anywhere?
  // if (Object.keys(userAcceptances).length === 0) {
  //   yield put({ type: 'START_GET_USER_ACCEPTANCES' });
  // }
  yield put({ type: 'END_LOADING', loading: false })
}

export { getProfileSaga };
