const defaultState = {
  abc_123: {
    name: 'Falcons Game vs Saints',
    inviter: 'Jon Doe',
    category: 'sports',
    date: '2018-05-10 19:30',
    location: 'Mercedes Benz',
    city: 'Atlanta',
    state: 'GA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .',
    url: 'https://i.imgur.com/x443dJI.jpg',
    selectedGuest: '',
    createdAt: 10,
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
    category: 'food',
    date: '2018-08-10 09:30',
    location: 'Chilis',
    city: 'Augusta',
    state: 'GA',
    description: 'Lorem ipsum dolor sit amet, at a cult favorite restaurant onsectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna.',
    url: 'https://i.imgur.com/hU6EISo.jpg',
    selectedGuest: '',
    createdAt: 9,
    interestedUsers: {
    }
  },
  xyz_789: {
    name: 'ATL United Game',
    inviter: 'John Doe',
    category: 'sports',
    date: '2018-06-10 09:30',
    location: 'Mercedes Benz',
    city: 'Atlanta',
    state: 'GA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .',
    url: 'https://i.imgur.com/gc48lZa.png',
    selectedGuest: '',
    createdAt: 8,
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
    name: 'The Cult Concert',
    inviter: 'Bob Smith',
    category: 'music',
    date: '2018-05-10 20:30',
    location: 'DC Stadium',
    city: 'Charleston',
    state: 'SC',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .',
    url: 'https://i.imgur.com/tYZoKbL.png',
    selectedGuest: 'user1',
    createdAt: 7,
    interestedUsers: {
      user1: true,
      user2: true,
      user3: true,
      user4: true,
      user5: true,
      user6: true,
      user7: true
    }
  },
  abc_456: {
    name: 'Falcons Game vs Rams',
    inviter: 'Jon Doe',
    category: 'sports',
    date: '2018-07-10 09:30',
    location: 'Mercedes Benz',
    city: 'Charleston',
    state: 'SC',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. .',
    url: 'https://i.imgur.com/x443dJI.jpg',
    selectedGuest: 'user2',
    createdAt: 6,
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
    case 'ADD_EVENTS':
      return action.events;
    case 'ADD_EVENT':
      return {
        ...state,
        [action.key]: action.event
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
