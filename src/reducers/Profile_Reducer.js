const defaultState = {name:'John Doe', location: 'Atlanta, GA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .'};

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