const defaultState = {
  abc_123: {
    name: 'Falcons Game', 
    inviter: 'Jon Doe', 
    date: 'Nov 13, 2018', 
    location: 'Mercedes Benz', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', 
    url: 'https://i.imgur.com/x443dJI.jpg',
    selectedGuest: '',
    interestedUsers: {
      user1: true,
      user2: true,
      user3: true,
      user4: true
    }
  },
  def_456: {
    name: 'Dinner With ME!', 
    inviter: 'John Doe', 
    date: 'Aug 19, 2018', 
    location: 'Chilis', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.', 
    url: 'https://i.imgur.com/hU6EISo.jpg',
    selectedGuest: '',
    interestedUsers: {
      user1: true,
      user2: true
    }
  },
  xyz_789: {
    name: 'ATL United Game', 
    inviter: 'John Doe', 
    date: 'Sept 21, 2018', 
    location: 'Mercedes Benz', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', 
    url: 'https://i.imgur.com/gc48lZa.png',
    selectedGuest: '',
    interestedUsers: {
      user1: true,
      user2: true,
      user3: true,
      user4: true,
      user5: true,
      user6: true
    }
  },
  xyz_234: {
    name: 'ATL United Game vs DC', 
    inviter: 'John Doe', 
    date: 'May 5, 2018', 
    location: 'DC Stadium', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', 
    url: 'https://i.imgur.com/gc48lZa.png',
    selectedGuest: 'user1',
    interestedUsers: {
      user1: true,
      user2: true,
      user3: true,
      user4: true,
      user5: true,
      user6: true
    } 
  },
  abc_456: {
    name: 'Falcons Game', 
    inviter: 'Jon Doe', 
    date: 'Nov 13, 2018', 
    location: 'Mercedes Benz', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .', 
    url: 'https://i.imgur.com/x443dJI.jpg',
    selectedGuest: 'user2',
    interestedUsers: {
      user1: true,
      user2: true,
      user3: true,
      user4: true,
      user5: true,
      user6: true
    }
  } 
};

const eventsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        // TODO: remove when moving to Firebase
        [(new Date).getTime()]: action.event
      }
    case 'EDIT_EVENT':
      return {
        ...state,                     // start with all of state  
        [action.id]: {                // grab the single event to change:
          ...state[action.id],        // get single event to change and spread its attrs
          ...action.updates           // override certain atts
        }
      }
    case 'DELETE_EVENT':
      const { [action.id]: deletedAttr, ...newState } = state;
      return {
        ...newState
      }
    default:
      return state;  
  }
};

export default eventsReducer;
