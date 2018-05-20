import database from '../firebase/firebase';
import { history } from '../router/AppRouter';
import { editUserEventListInFirebase } from './Profile_Actions';

export const createEventInFirebase = (event = {}) => {
  return (dispatch, getState) => {
    return database.ref(`events`).push(event)
      .then((ref) => {
        dispatch(addEvent(ref.key, {...event}));
        dispatch(editUserEventListInFirebase(event.uid, ref.key))
        history.push(`/show-event/${encodeURIComponent(ref.key)}`)
      }
    )
  }
}

export const addEvent = (key, event) => {
  return {
    type: 'ADD_EVENT',
    key,
    event
  }
}

export const getUserEventsFromFirebase = (uid) => {
  return new Promise((resolve, reject) => {
    return database.ref(`events`).orderByChild('uid').equalTo(uid) .once('value')
      .then((snapshot) => {
        if(snapshot) {
          resolve(snapshot.val())
        } else {
          reject(new Error('FAILED TO GET USER EVENTS FROM FIREBASE: ', error))
        }
      })
  })
}

// export const getUserEventsFromFirebase = (uid) => {
//   const events = {};
//   return (dispatch, getState) => {
//      return database.ref(`events`).orderByChild('uid').equalTo(uid)
//       .once('value')
//       .then((snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//           events[childSnapshot.key] = childSnapshot.val()
//         })
//         dispatch(addEvents(events))
//       })
//   };
// };

export const getOtherUserEventsFromFirebase = (uid) => {
  const events = {};
  return (dispatch, getState) => {
    return database.ref(`events`).orderByChild('selectedUser').equalTo('none').limitToFirst(200)
      .once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          if(childSnapshot.val().uid !== uid) {
            events[childSnapshot.key] = childSnapshot.val()
          }
        })
        dispatch(addEvents(events))
      })
  };
};

export const addEvents = (events) => {
  return {
    type: 'ADD_EVENTS',
    events
  }
}

export const editEventInFirebase = (id, updates) => {
  return(dispatch, getState) => {
    return database.ref(`events/${id}`).update(updates)
      .then(() => {
        dispatch(editEvent(id, updates))
      }
    )
  }
}

export const editEvent = (id, updates) => {
  return {
    type: 'EDIT_EVENT',
    id,
    updates
  }
}

export const deleteEventInFirebase = (eventId) => {
  return(dispatch, getState) => {
    const userId = getState().auth.uid;
    return database.ref(`events/${eventId}`).remove()
      .then(() => {
        dispatch(deleteEvent(eventId));
      }
    )
  }
}

export const deleteEvent = (id) => {
  return {
    type: 'DELETE_EVENT',
    id
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