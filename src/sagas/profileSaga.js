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
  const userInfo = yield call(getProfileFromFirebase, userId);
  yield put(setProfile(userInfo));
  
  // TODO: how to handle the below info
  // const currentUserInfo = yield call(auth.getCurrentUser)
  // console.log('PROFILE_SAGA: currentUserInfo', currentUserInfo);
  //   yield put(setProfile({
  //     displayName: currentUserInfo.displayName,
  //     photoURL: currentUserInfo.photoURL,
  //     email: currentUserInfo.email
  //   }));

  yield put({ type: 'GET_PROFILE_SUCCESS' });

  // this is the check to see if events are from other people besides currentUser
  // const eventUserIds = yield select(state => getEventUserIDs(objToArray(state.events)));
  // if (eventUserIds.length === 0 || !eventUserIds.includes(userId)) {
    yield put({ type: 'START_GET_EVENTS', userId: userId });
  // }
  // const userAcceptances = yield select(state => state.acceptances)
  // if (Object.keys(userAcceptances).length === 0) {
  //   yield put({ type: 'START_GET_USER_ACCEPTANCES' });
  // }
  console.log('PROFILE_SAGA: end')
}

const getEventUserIDs = (events) => {
  const userIds = []
  events.forEach((event) => {
    userIds.push(event.uid);
  })
  return userIds;
}

export { getProfileSaga };
