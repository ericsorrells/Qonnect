const defaultState = {};

const profileReducer = (state = defaultState, action) => {
  console.log('STATE: ', state);
  console.log('ACT', action);
  switch(action.type) {
    case 'ADD_PROFILE':
      const { name, location, description} = action.profile;
      return {
        ...state,
        name: name,
        location: location,
        description: description
      }
    default:
      return state;  
  }
}

export default profileReducer;