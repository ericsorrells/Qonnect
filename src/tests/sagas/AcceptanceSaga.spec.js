// ========================================================================================
import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import { createInterestedUser } from '../../actions/Events_Actions';
import { addEventToAcceptedEvent } from '../../actions/Profile_Actions';
import { createInterestedUserInFirebase } from '../../firebase/helpers/eventsFirebase';
import { createUserAcceptedEventInFirebase } from '../../firebase/helpers/profileFirebase';
import {
  createAcceptances,
  createAcceptance,
  chooseAcceptance
} from '../../actions/Acceptances_Actions';
import {
  getEventAcceptancesSaga,
  userAcceptEvent,
  ownerSelectsGuestSaga
} from '../../sagas/acceptancesSaga';
import {
  getEventAcceptancesFromFirebase,
  updateAcceptanceSelectionInFirebase,
  createAcceptanceInFirebase,
} from '../../firebase/helpers/acceptancesFirebase';
// ========================================================================================

describe('AcceptanceSaga', () => {
  describe('getEventAcceptancesSaga*()', () => {
    const eventId = 'event123';
    it('creates acceptances', () => {
      const acceptances = [{ acceptance: true }, { acceptance: true }]
      return expectSaga(getEventAcceptancesSaga, { eventId })
        .provide([
          [call(getEventAcceptancesFromFirebase, eventId), acceptances]
        ])
        .put(createAcceptances(acceptances))
        .put({ type: 'GET_EVENT_ACCEPTANCES_SUCCESS' })
        .run();
    });

    it('handles errors', () => {
      const error = new Error('error');
      return expectSaga(getEventAcceptancesSaga, { eventId: null })
        .provide([
          [call(getEventAcceptancesFromFirebase, null), throwError(error)]
        ])
        .put({ type: 'GET_EVENT_ACCEPTANCES_FAILED', error: error })
        .run()
    });
  });

  describe('userAcceptEvent*()', () => {
    const userId = 'user789';
    const user = { uid: 'user456', firstName: 'John', lastName: 'Doe', photoURL: 'http://foo.com' };
    const eventId = 'event123';
    const acceptanceInfo = {acceptanceNote: 'some note to event owner'};
    const acceptance = {
      eventId: eventId,
      userId: userId,
      userName: `${user.firstName} ${user.lastName}`,
      userPhotoURL: user.photoURL,
      acceptanceNote: acceptanceInfo.acceptanceNote,
      selected: false,
      createAt: 123455
    };

    it('allows a user to accept an event', () => {

      return expectSaga(userAcceptEvent, {userId, user, eventId, acceptanceInfo})
        .provide([
          [call(createInterestedUserInFirebase, userId, eventId)],
          [call(getEventAcceptancesFromFirebase, eventId), eventId],
          [matchers.call.fn(createAcceptanceInFirebase, acceptance), acceptance],
          [matchers.call.fn(createUserAcceptedEventInFirebase, eventId)]
        ])
        .put(createInterestedUser(userId, eventId))
        .put(createAcceptance(acceptance))
        .call(createUserAcceptedEventInFirebase, userId, eventId)
        .put(addEventToAcceptedEvent(eventId))
        .put({ type: 'USER_ACCEPT_EVENTS_SUCCESS' })
        .run()
    });

    it('handles errors', () => {
      const error = new Error('error');
      return expectSaga(userAcceptEvent, {userId, user, eventId, acceptanceInfo})
        .provide([
          [call(createInterestedUserInFirebase, userId, eventId), throwError(error)]
        ])
        .put({ type: 'USER_ACCEPT_EVENTS_FAILED', error: error })
        .run()
    });
  });

  describe('ownerSelectsGuestSaga*()', () => {
    const eventId = 'event123';
    const acceptanceId = 'aceeptance789'

    it('allows Owner to select Guest', () => {
      return expectSaga(ownerSelectsGuestSaga, { eventId, acceptanceId: acceptanceId})
        .provide([
          [call(updateAcceptanceSelectionInFirebase, eventId, acceptanceId)]
        ])
        .call(updateAcceptanceSelectionInFirebase, eventId, acceptanceId)
        .put(chooseAcceptance(eventId, acceptanceId))
        .put({ type: 'OWNER_SELECTS_GUEST_SUCCESS' })
        .run()
    });

    it('handles errors', () => {
      const error = new Error('error');
      return expectSaga(ownerSelectsGuestSaga, { eventId, acceptanceId: null })
        .provide([
          [call(updateAcceptanceSelectionInFirebase, eventId, null), throwError(error)]
        ])
        .put({ type: 'OWNER_SELECTS_GUEST_FAILED', error: error })
        .run()
    });
  });
})