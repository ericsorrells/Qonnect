// ========================================================================================
import configureStore from 'redux-mock-store';
import {
  startCreateEvent,
  createEvent,
  addEvents,
  startEditEvent,
  editEvent,
  startDeleteEvent,
  deleteEvent,
  startGetOtherEvents,
  createInterestedUser
} from '../../actions/Events_Actions';
// ========================================================================================

describe('Events Actions', () => {
  const userId = 'user123';
  const eventId = 'event123';
  const event = { name: 'my Event', uid: eventId };
  const key = 'key123';
  const events = [{ name: 'myEvent1', uid: eventId }, { name: 'myEvent2', uid: eventId }];
  const eventUpdates = { ...event, name: 'myNewName'};

  it('startCreateEvent()', () => {
    const action = startCreateEvent(event);
    expect(action).toEqual({
      type: 'START_CREATE_EVENT',
      event: event
    });
  });

  it('createEvent()', () => {
    const action = createEvent(key, event)
    expect(action).toEqual({
      type: 'CREATE_EVENT',
      key: key,
      event: event
    })
  });

  it('addEvents()', () => {
    const action = addEvents(events)
    expect(action).toEqual({
      type: 'ADD_EVENTS',
      events
    })
  });

  it('startEditEvent()', () => {
    const action = startEditEvent(eventId, eventUpdates)
    expect(action).toEqual({
      type: 'START_EDIT_EVENT',
      eventId: eventId,
      eventUpdates: eventUpdates
    })
  });

  it('editEvent()', () => {
    const action = editEvent(eventId, eventUpdates)
    expect(action).toEqual({
      type: 'EDIT_EVENT',
      eventId: eventId,
      eventUpdates: eventUpdates
    })
  });

  it('startDeleteEvent()', () => {
    const action = startDeleteEvent(userId, eventId)
    expect(action).toEqual({
      type: 'START_DELETE_EVENT',
      userId: userId,
      eventId: eventId
    })
  });

  it('deleteEvent()', () => {
    const action = deleteEvent(eventId)
    expect(action).toEqual({
      type: 'DELETE_EVENT',
      id: eventId
    })
  });

  it('startGetOtherEvents()', () => {
    const action = startGetOtherEvents(userId)
    expect(action).toEqual({
      type: 'START_GET_OTHER_EVENTS',
      userId: userId
    })
  });

  it('createInterestedUser()', () => {
    const action = createInterestedUser(userId, eventId)
    expect(action).toEqual({
      type: 'CREATE_INTERESTED_USER',
      userId: userId,
      eventId: eventId
    })
  });
});

