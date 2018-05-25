import database from '../firebase/firebase';
import { history } from '../router/AppRouter';
import { editUserEventListInFirebase } from './Profile_Actions';

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

// export const getOtherUserEventsFromFirebase = (uid) => {
//   const events = {};
//   return (dispatch, getState) => {
//     return database.ref(`events`).orderByChild('selectedUser').equalTo('none').limitToFirst(200)
//       .once('value')
//       .then((snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//           if(childSnapshot.val().uid !== uid) {
//             events[childSnapshot.key] = childSnapshot.val()
//           }
//         })
//         dispatch(addEvents(events))
//       })
//   };
// };

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

export const createInterestedUserInFirebase = (eventId) => {
  return (dispatch, getState) => {
    const userId = getState().auth.uid;
    return database.ref(`events/${eventId}`).child('interestedUsers').update({[`${userId}`]: true})
      .then((ref) => {
        dispatch(createInterestedUser(eventId, userId));
        history.push(`/show-event/${encodeURIComponent(eventId)}`)
      }
    )
  };
}

export const createInterestedUser = (eventId, userId) => {
  return {
    type: 'CREATE_INTERESTED_USER',
    eventId,
    userId
  }
}