// ========================================================================================
import { history }  from '../router/AppRouter.js';
import { firebase } from '../firebase/firebaseIndex';
import { auth }     from '../firebase/firebaseIndex';
import { select, take, call, put }             from 'redux-saga/effects'
import { addEvents, createEvent, deleteEvent } from '../actions/Events_Actions';
import {
  getUserEventsFromFirebase,
  createEventInFirebase,
  deleteEventInFirebase
} from '../firebase/helpers/eventsFirebase';
import {
  deleteUserEventListFromFirebase,
  addToUserEventListInFirebase,
} from '../firebase/helpers/profileFirebase';
// ========================================================================================

function* getEventsSaga() {
  const { uid: userId } = yield call(auth.getCurrentUser);
  const events          = yield call(getUserEventsFromFirebase, userId)
  yield put(addEvents(events));
  yield put({ type: 'GET_EVENTS_SUCCESS' });
}

function* eventsCreateSaga() {
  while (true) {
    const { event: eventInfo }      = yield take('START_EVENTS');
    const { uid:   userId }         = yield select(state => state.auth);
    const { key:   eventId, event } = yield call(createEventInFirebase, eventInfo);
    yield put(createEvent(eventId, event));
    yield call(addToUserEventListInFirebase, userId, eventId);
    yield history.push(`/show-event/${eventId}`);
    yield put({ type: 'EVENTS_SUCCESS' });
  }
}

function* eventsDeleteSaga() {
  while (true) {
    const { userId, eventId } = yield take('START_DELETE_EVENT');
    yield call(deleteEventInFirebase, eventId);
    yield put(deleteEvent(eventId));
    yield call(deleteUserEventListFromFirebase, userId, eventId);
    yield history.push(`/profile/${userId}`);
    yield put({ type: 'DELETE_EVENTS_SUCCESS' });
  }
}

export { getEventsSaga, eventsCreateSaga, eventsDeleteSaga };