const defaultState = {
  name:'John Doe', 
  location: 'Atlanta, GA',
  age: 34,
  joinDate: 'November 21, 2000',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .',
  eventsAttended: {
    event1: true,
    event2: true,
    event3: true,
    event4: true
  },
  followers: {
    user1: true,
    user2: true,
    user3: true
  },
  following: {
    user4: true,
    user5: true
  }
};

const profileReducer = (state = defaultState, action) => {
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