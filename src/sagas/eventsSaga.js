// ========================================================================================
import { select, take, call, put } from 'redux-saga/effects'
import { createEvent } from '../actions/Events_Actions';
import { createEventInFirebase } from '../firebase/helpers/eventsFirebase';
import { history } from '../router/AppRouter.js';
import { firebase } from '../firebase/firebaseIndex';
// ========================================================================================

function* eventsSaga() {
  const { event: eventInfo } = yield take('START_EVENTS')
  const { key, event } = yield call(createEventInFirebase, eventInfo)
  const reduxEvents = yield put(createEvent(key, event));
  yield history.push(`/show-event/${key}`);
  yield put({ type: 'EVENTS_SUCCESS' })
}

export default eventsSaga;