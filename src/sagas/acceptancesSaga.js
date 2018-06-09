// ========================================================================================
import { history } from '../router/AppRouter.js';
import { firebase } from '../firebase/firebaseIndex';
import { auth } from '../firebase/firebaseIndex';
import { select, take, call, put } from 'redux-saga/effects';
import { createAcceptance, createAcceptances, chooseAcceptance } from '../actions/Acceptances_Actions';
import { createInterestedUserInFirebase } from '../firebase/helpers/eventsFirebase';
import { createUserAcceptedEventInFirebase } from '../firebase/helpers/profileFirebase';
import { createInterestedUser } from '../actions/Events_Actions';
import { addEventToAcceptedEvent } from '../actions/Profile_Actions';
import {
  getEventAcceptancesFromFirebase,
  createAcceptanceInFirebase,
  updateAcceptanceSelectionInFirebase
} from '../firebase/helpers/acceptancesFirebase';
// ========================================================================================
import moment from 'moment';
// ========================================================================================

function* getEventAcceptancesSaga({ eventId }) {
  try {
    const acceptances = yield call(getEventAcceptancesFromFirebase, eventId);
    if (acceptances) {
      yield put(createAcceptances(acceptances));
    }
    yield put({ type: 'GET_EVENT_ACCEPTANCES_SUCCESS' });
  } catch (e) {
    yield put({ type: 'GET_EVENT_ACCEPTANCES_FAILED', error: e });
  }
}

function* userAcceptEvent({ userId, user, eventId, acceptanceInfo }) {
  try {

    yield call(createInterestedUserInFirebase, userId, eventId);
    yield put(createInterestedUser(userId, eventId));
    yield call(getEventAcceptancesFromFirebase, eventId);
    const acceptance = yield call(createAcceptanceInFirebase, {
      eventId: eventId,
      userId: userId,
      userName: `${user.firstName} ${user.lastName}`,
      userPhotoURL: user.photoURL,
      acceptanceNote: acceptanceInfo.acceptanceNote,
      selected: false,
      createAt: moment.now()
    });
    yield put(createAcceptance(acceptance));
    yield call(createUserAcceptedEventInFirebase, userId, eventId);
    yield put(addEventToAcceptedEvent(eventId));
    yield put({ type: 'USER_ACCEPT_EVENTS_SUCCESS' })
  } catch(e) {
    yield put({ type: 'USER_ACCEPT_EVENTS_FAILED', error: e });
  }
}

function* ownerSelectsGuestSaga({ eventId, acceptanceId }) {
  try {
    yield call(updateAcceptanceSelectionInFirebase, eventId, acceptanceId);
    yield put(chooseAcceptance(eventId, acceptanceId));
    yield put({ type: 'OWNER_SELECTS_GUEST_SUCCESS' });
  } catch (e) {
    yield put({ type: 'OWNER_SELECTS_GUEST_FAILED', error: e });
  }
}

export {
  getEventAcceptancesSaga,
  userAcceptEvent,
  ownerSelectsGuestSaga
};