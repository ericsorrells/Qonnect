const defaultState = {
//   displayName:    'Jane Doe',
//   firstName:      'Jane',
//   lastName:       'Doe ',
//   email:          'fake@email.com',
//   photoU:       'http://something',
//   city:           'August',
//   state:          'GA',
//   birthDate:      '2000-11-02',
//   description:    'sdf sdf sadf asdf asdfasfd',
//   createdAt:     123,
//   updatedAt:      789,
//   userEvents:     {},
//   acceptedEvents: {},
//   followers:      {},
//   following:      {}
};

const profileReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_PROFILE':
      return state;
    case 'CREATE_PROFILE':
      return {
        ...state,
        ...action.profileInfo
      }
    case 'SET_PROFILE':
    case 'UPDATE_PROFILE':
      return {
        ...state,
        ...action.profileUpdates
      }
    case 'USER_ACCEPTED_EVENT':
      return{
        ...state,
        acceptedEvents: {
          [action.eventId]: true
        }
      }  
    case 'EDIT_USER_EVENT_LIST':
      return {
        ...state,
        userEvents: {
          ...state.userEvents,
          [action.eventId]: false
        }
      }  
    case 'ADD_EVENT_TO_ACCEPTED_EVENTS':
      return {
        ...state,
        acceptedEvents: {
          ...state.acceptedEvents,
          [action.eventId]: false
        }  
      }
    default:
      return state;
  }
}

export default profileReducer;