https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_overlay_opacity

// FIREBASE SCHEMA:
{
  "users": {
    "user1_abc123": {
      "userName": "joeblow",
      "firstName": "John",
      "lastName": "Smith",
      "email": "user1@gmail.com",
      "photoURL": "",
      "city": "Atlanta",
      "state": "GA",
      "birthDate": 1976-11-04,
      "description": "some long description",
      "createdAt": "November 21, 2000",
      "userEvents": {
        event1_xyz123: true,
        event2_xyz456: true,
        event3_xyz789: true
      },
      "acceptedEvents": {
        event1_xyz123: false,
        event2_xyz456: false,
        event3_xyz789: true           // attended this event
      }
    },
    "user2_xyz789": {
      ...
    }
  },
  "events": {
    "event1_xyz123": {
      "userId": "user1_abc123"
      "eventName": "500",
      "date": "May 5",
      "location": "Stadium",
      "category": "sports",
      "imageUrl": 'https://i.imgur.com/x443dJI.jpg',
      "selectedUser": "user2_xyz789"
      "interestedUsers": {
        user1: true,
        user2: true,
        user3: true,
        user4: true
      },
      "uninterestedUsers": {
        event1_xyz123: true,
        event2_xyz456: true,
        event3_xyz789: true
      }
    },
    "event_rdg175": {
      ...
    },
    "event1_xyz783": {
      ...
    },
  },
  "acceptances": {
    "event1_xyz123": {
      "acceptance_123": { userId: 'user1_abc123', eventId: event1_xyz123,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 },
      "acceptance_382": { userId: 'user1_abc123', eventId: event1_xyz123,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 },
      "acceptance_308": { userId: 'user1_abc123', eventId: event1_xyz123,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 }
    },
    "event_jdh654": {
      "acceptance_196": { userId: 'user1_abc123', eventId: event_jdh654,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 },
      "acceptance_138": { userId: 'user1_abc123', eventId: event_jdh654,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 },
      "acceptance_181": { userId: 'user1_abc123', eventId: event_jdh654,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 },
      "acceptance_145": { userId: 'user1_abc123', eventId: event_jdh654,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 }
    }
  }
}

// STATE
{
  currentUser: {
    "userName": "joeblow",
    "fullName": "John Smith",
    "email": "user1@gmail.com",
    "location": "Atlanta, GA"
    "age": 34,
    "description": "some long description",
    "createdAt": "November 21, 2000",
    "userEvents": {
      event1_xyz123: true,
      event2_xyz456: true,
      event3_xyz789: true
    },
    "acceptedEvents": {
      event1_xyz123: false,
      event2_xyz456: false,
      event3_xyz789: true           // attended this event
    }
  },
  eventUser: {
    ...
    userId: user_abc123,
  },
  events: {
    event_123: {
      "userId": "user1_abc123"
      "eventName": "Falcons Game",
      "date": "May 5",
      "location": "Stadium",
      "category": "sports",
      "imageUrl": 'https://i.imgur.com/x443dJI.jpg',
      "interestedUsers": {
        user1: true,
        user2: true,
        user3: true,
        user4: true
      },
      timestamp: 12323433543
    },
    event_456: {
      ...
    },
    event_451: {
      ...
    }
  },
  acceptances: {
    "acceptance_196": { userId: 'user1_abc123', eventId: event_jdh654,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 },
    "acceptance_138": { userId: 'user1_abc123', eventId: event_jdh654,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 },
    "acceptance_181": { userId: 'user1_abc123', eventId: event_jdh654,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 },
    "acceptance_145": { userId: 'user1_abc123', eventId: event_jdh654,  userName: 'Alex Smith', acceptance: 'I love steak', selected: false, createdAt: 123875 } ...
  },
  searchFilters: {
    sortBy: 'date',
    city: '',
    startDate: '',
    endDate: '',
    cateogory: '',
    searchTerm: ''
  },
  loading: false
}










https://www.npmjs.com/package/rc-time-picker

yarn add rc-time-picker

import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

this.handleTimeChange   = this.handleTimeChange.bind(this);

handleSubmit(e) {
    e.preventDefault();
    const dateTime = this.state.date.concat(` ${this.state.time}`)
    console.log('DATETIME', dateTime);
    this.props.setFilters({
      city:       this.state.city,
      date:       dateTime,
      category:   this.state.category,
      searchTerm: this.state.searchTerm,
      sortBy:     this.state.sortBy,
      startDate:  this.state.startDate,
      endDate:    moment(this.state.endDate)
    });
  }

    handleTimeChange(value) {
    this.setState({ time: value })
  }

   <label>Date:</label>
        <TimePicker
          showSecond={false}
          defaultValue={moment().hour(0).minute(0)}
          className="xxx"
          format={'h:mm A'}
          use12Hours
          inputReadOnly
          onChange={this.handleTimeChange}
        />