// ========================================================================================
import database from '../firebase/firebase';
// ========================================================================================

export const startGetProfile = (userId) => {
  return {
    type: 'START_GET_PROFILE',
    userId
  }
}

export const setProfile = (profileUpdates) => {
  return {
    type: 'SET_PROFILE',
    profileUpdates
  }
}

export const getProfile = () => {
  return {
    type: 'GET_PROFILE'
  }
}

export const createProfile = (profileInfo) => {
  return {
    type: 'CREATE_PROFILE',
    profileInfo
  }
}

export const updateProfile = (profileUpdates) => {
  return {
    type: 'UPDATE_PROFILE',
    profileUpdates
  }
}

export const editUserEventList = (userId, eventId) => {
  return {
    type: 'EDIT_USER_EVENT_LIST',
    userId,
    eventId
  }
}

export const addEventToAcceptedEvent = (eventId) => {
  return {
    type: 'ADD_EVENT_TO_ACCEPTED_EVENTS',
    eventId
  }
}

export const deleteUserEventList = (eventId) => {
  return {
    type: 'DELETE_USER_EVENT_LIST',
    eventId
  }
}

export const createUserAcceptedEvent = (eventId, userId) => {
  return {
    type: 'USER_ACCEPTED_EVENT',
    eventId,
    userId
  }
}

export const updateProfileInFirebase = (profileUpdates = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    event.uid = uid
    return database.ref(`users/${uid}`).update(profileUpdates)
      .then(() => {
        dispatch(updateProfile(profileUpdates));
      }
      )
  }
}