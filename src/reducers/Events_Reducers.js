const defaultState = { };

const eventsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_EVENTS':
      return action.events;
    case 'CREATE_EVENT':
      return {
        ...state,
        [action.key]: action.event
      }
    case 'EDIT_EVENT':
      return {
        ...state,                          // start with all of state
        [action.eventId]: {                // grab the single event to change:
          ...state[action.eventId],        // get single event to change and spread its attrs
          ...action.eventUpdates           // override certain atts
        }
      }
    case 'DELETE_EVENT':
      const { [action.id]: deletedAttr, ...newState } = state;
      return {
        ...newState
      }
    case 'CREATE_INTERESTED_USER':
      return {
        ...state,
        [action.eventId]: {
          ...state[action.eventId],
          interestedUsers: {
            [action.userId]: true
          }
        }
      }
    default:
      return state;
  }
};

export default eventsReducer;
