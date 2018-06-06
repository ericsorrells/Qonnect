// ========================================================================================
import configureStore from 'redux-mock-store';
import {
  startGettingEventAcceptances,
  startCreateAcceptance,
  startOwnerSelectsGuest,
  createAcceptance,
  startCreateAcceptances,
  createAcceptances,
  startUserAcceptEvent,
  startChooseAcceptance,
  chooseAcceptance
} from '../../actions/Acceptances_Actions';
// ========================================================================================

describe('Acceptances Actions', () => {
  const acceptances  = [{uid: 'acc1'}, {uid: 'acc2'}];
  const user         = { name: 'Joe', uid: 'abc123' }
  const eventId      = 'abc123';
  const acceptanceId = 'xyz789';

  it('startGettingEventAcceptances()', () => {
    const action = startGettingEventAcceptances('123')
    expect(action).toEqual({
      type: 'START_GET_EVENT_ACCEPTANCES',
      eventId: '123'
    })
  });

  it('startCreateAcceptance()', () => {
    const action = startCreateAcceptance('acceptanceInfo')
    expect(action).toEqual({
      type: 'START_CREATE_ACCEPTANCE',
      acceptanceInfo: 'acceptanceInfo'
    })
  });

  it('startOwnerSelectsGuest()', () => {
    const action = startOwnerSelectsGuest(eventId, acceptanceId)
    expect(action).toEqual({
      type: 'OWNER_SELECTS_GUEST',
      eventId: eventId,
      acceptanceId: acceptanceId
    })
  });

  it('createAcceptance()', () => {
    const action = createAcceptance('123')
    expect(action).toEqual({
      type: 'CREATE_ACCEPTANCE',
      acceptanceInfo: '123'
    })
  });

  it('startCreateAcceptances()', () => {
    const action = startCreateAcceptances(acceptances)
    expect(action).toEqual({
      type: 'START_CREATE_ACCEPTANCES',
      acceptances: acceptances
    })
  });

  it('createAcceptances()', () => {
    const action = createAcceptances(acceptances)
    expect(action).toEqual({
      type: 'CREATE_ACCEPTANCES',
      acceptances: acceptances
    })
  });

  it('startUserAcceptEvent()', () => {
    const action = startUserAcceptEvent('123', user, 'xyz', 'some info');
    expect(action).toEqual({
      type: 'START_USER_ACCEPT_EVENTS',
      userId: '123',
      user: user,
      eventId: 'xyz',
      acceptanceInfo: 'some info'
    })
  });

  it('startChooseAcceptance()', () => {
    const action = startChooseAcceptance(eventId, acceptanceId)
    expect(action).toEqual({
      type: 'START_CHOOSE_ACCEPTANCE',
      eventId: eventId,
      acceptanceId: acceptanceId
    })
  });

  it('chooseAcceptance()', () => {
    const action = chooseAcceptance(eventId, acceptanceId)
    expect(action).toEqual({
      type: 'SELECT_ACCEPTANCE',
      eventId: eventId,
      acceptanceId: acceptanceId
    })
  });
});
