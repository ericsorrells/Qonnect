// ========================================================================================
import database from '../firebase/firebase';
import { history } from '../router/AppRouter';
import { editUserEventListInFirebase } from './Profile_Actions';
// ========================================================================================

export const startCreateEvent = (event) => {
  return {
    type: 'START_CREATE_EVENT',
    event
  }
}

export const createEvent = (key, event) => {
  return {
    type: 'CREATE_EVENT',
    key,
    event
  }
}

export const addEvents = (events) => {
  return {
    type: 'ADD_EVENTS',
    events
  }
}

export const startEditEvent = (eventId, eventUpdates) => {
  return {
    type: 'START_EDIT_EVENT',
    eventId,
    eventUpdates
  }
}

export const editEvent = (eventId, eventUpdates) => {
  return {
    type: 'EDIT_EVENT',
    eventId,
    eventUpdates
  }
}

export const startDeleteEvent = (userId, eventId) => {
  return {
    type: 'START_DELETE_EVENT',
    userId,
    eventId
  }
}

export const deleteEvent = (id) => {
  return {
    type: 'DELETE_EVENT',
    id
  }
}

export const startGetOtherEvents = (userId) => {
  return {
    type: 'START_GET_OTHER_EVENTS',
    userId
  }
}

export const createInterestedUser = (userId, eventId) => {
  return {
    type: 'CREATE_INTERESTED_USER',
    userId,
    eventId
  }
}