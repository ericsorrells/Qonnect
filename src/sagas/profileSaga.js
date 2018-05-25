// ========================================================================================
import 'regenerator-runtime/runtime';
import { call, put, fork, take, select } from 'redux-saga/effects';
import { history } from '../router/AppRouter';
import { getProfileFromFirebase } from '../firebase/helpers/profileFirebase';
import { getProfile, setProfile } from '../actions/Profile_Actions';
import { auth } from '../firebase/firebaseIndex';
import { getEventsSaga } from './eventsSaga';
import { objToArray } from '../utils/utils';
// ========================================================================================

function* getProfileSaga({ userId }) {
  // TODO: change this to get other user prorfiles
  const currentUserInfo = yield call(auth.getCurrentUser)
  const userInfo = yield call(getProfileFromFirebase, userId);
  yield put(setProfile({
    displayName: currentUserInfo.displayName,
    photoURL: currentUserInfo.photoURL,
    email: currentUserInfo.email
  }));
  yield put(setProfile(userInfo));
  yield put({ type: 'GET_PROFILE_SUCCESS' });
  const eventUserIds = yield select(state => getEventUserIDs(objToArray(state.events)));
  if (eventUserIds.length === 0 || !eventUserIds.includes(userId)) {
    yield put({ type: 'START_GET_EVENTS' });
  }
}

const getEventUserIDs = (events) => {
  const userIds = []
  events.forEach((event) => {
    userIds.push(event.uid);
  })
  return userIds;
}

export { getProfileSaga };
