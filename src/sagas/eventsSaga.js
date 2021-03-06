// ========================================================================================
import { history } from '../router/AppRouter.js';
import { firebase } from '../firebase/firebaseIndex';
import { auth } from '../firebase/firebaseIndex';
import { select, take, call, put } from 'redux-saga/effects'
import { addEvents, createEvent, editEvent, deleteEvent } from '../actions/Events_Actions';
import {
  getUserEventsFromFirebase,
  createEventInFirebase,
  editEventInFirebase,
  deleteEventInFirebase,
  getOtherUserEventsFromFirebase
} from '../firebase/helpers/eventsFirebase';
import {
  deleteUserEventListFromFirebase,
  addToUserEventListInFirebase,
} from '../firebase/helpers/profileFirebase';
// ========================================================================================

function* getEventsSaga({ userId }) {
  yield put({ type: 'START_LOADING', loading: true })
  const events = yield call(getUserEventsFromFirebase, userId)
  yield put(addEvents(events));
  yield put({ type: 'GET_EVENTS_SUCCESS' });
  yield put({ type: 'END_LOADING', loading: true })
}

function* eventsCreateSaga({ event: eventInfo }) {
  const { uid: userId } = yield select(state => state.auth);
  const { key: eventId, event } = yield call(createEventInFirebase, eventInfo);
  yield put(createEvent(eventId, event));
  yield call(addToUserEventListInFirebase, userId, eventId);
  yield history.push(`/show-event/${eventId}`);
  yield put({ type: 'EVENTS_SUCCESS' });
}

function* eventsEditSaga({ eventId, eventUpdates }) {
  yield call(editEventInFirebase, eventId, eventUpdates);
  yield put(editEvent(eventId, eventUpdates))
  yield history.push(`/show-event/${eventId}`);
  yield put({type: 'EDIT_EVENT_SUCCESS'})
}

function* eventsDeleteSaga({ userId, eventId }) {
  yield call(deleteEventInFirebase, eventId);
  yield put(deleteEvent(eventId));
  yield call(deleteUserEventListFromFirebase, userId, eventId);
  yield history.push(`/profile/${userId}`);
  yield put({ type: 'DELETE_EVENTS_SUCCESS' });
}

function* eventsOtherEventsSaga({ userId }) {
  yield put({ type: 'START_LOADING', loading: true })
  const events = yield call(getOtherUserEventsFromFirebase, userId);
  yield put(addEvents(events));
  yield put({ type: 'GET_OTHER_EVENTS_SUCCESS' })
  yield put({ type: 'END_LOADING', loading: true })
}

export {
  getEventsSaga,
  eventsCreateSaga,
  eventsEditSaga,
  eventsDeleteSaga,
  eventsOtherEventsSaga
};