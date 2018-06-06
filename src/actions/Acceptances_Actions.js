// ========================================================================================
import database from '../firebase/firebase';
import { history } from '../router/AppRouter';
// ========================================================================================

export const startGettingEventAcceptances = (eventId) => {
  return {
    type: 'START_GET_EVENT_ACCEPTANCES',
    eventId
  }
}

export const startCreateAcceptance = (acceptanceInfo) => {
  return{
    type: 'START_CREATE_ACCEPTANCE',
    acceptanceInfo
  }
}

export const startOwnerSelectsGuest = (eventId, acceptanceId) => {
  return {
    type: 'OWNER_SELECTS_GUEST',
    eventId,
    acceptanceId
  }
}

export const createAcceptance = (acceptanceInfo) => {
  return {
    type: 'CREATE_ACCEPTANCE',
    acceptanceInfo
  }
}

export const startCreateAcceptances = (acceptances) => {
  return{
    type: 'START_CREATE_ACCEPTANCES',
    acceptances
  }
}

export const createAcceptances = (acceptances) => {
  return {
    type: 'CREATE_ACCEPTANCES',
    acceptances
  }
}

export const startUserAcceptEvent = (userId, user, eventId, acceptanceInfo) => {
  return {
    type: 'START_USER_ACCEPT_EVENTS',
    userId,
    user,
    eventId,
    acceptanceInfo
  }
}

export const startChooseAcceptance = (eventId, acceptanceId) => {
  return {
    type: 'START_CHOOSE_ACCEPTANCE',
    eventId,
    acceptanceId
  }
}

export const chooseAcceptance = (eventId, acceptanceId) => {
  return {
    type: 'SELECT_ACCEPTANCE',
    eventId,
    acceptanceId
  }
}