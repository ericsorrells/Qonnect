// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebaseIndex';
// ========================================================================================
import EventItem from './EventItem';
import UserInfo from './UserInfo';
import UserStats from '../containers/UserStats_Container';
import EventItems from './EventItems';
// ========================================================================================
import { objToArray } from '../utils/utils'
// ========================================================================================

// TODO: add link to update profile info
class Profile extends React.Component {
  componentDidMount(){
    const user = auth.getCurrentUser();
    console.log('CURRENT USER', user);
    if(user) {
      this.props.getProfileFromFirebase(user.uid)
      this.props.setProfile({ displayName: user.displayName, photoURL: user.photoURL })
      this.props.getProfileFromFirebase()
      this.props.getEventsFromFirebase()
    } else {
      //redirect to sign in
    }
  }

  render(){
    const { events, history, profile, deleteEvent } = this.props
    return(
      <div className="profile">
        <div className="container">
          <div className="profile__user-stats">
            <section>
              <UserStats />
            </section>
          </div>
        </div>
        <div className="profile__outer-container">
          <div className="container profile__inner-container">
            <aside className="aside-container">
              <UserInfo {...profile} />
            </aside>
            <section>
              <EventsHeader history={history} />
              {events &&
                <EventItems
                  events={events}
                  history={history}
                  deleteEvent={deleteEvent}
                />
              }
            </section>
          </div>
        </div>
      </div>
    )
  }
}
// const Profile = ({ events, history, profile, deleteEvent }) => {
//   return(
//   )
// }

const EventsHeader = (props) => {
  const handleClick = () => {
    props.history.push(`/add-event/`);
  }

  return(
    <div className='events-header'>
      <h1>My Events</h1>
      <button className='events-header__button' onClick={handleClick}>Create</button>
    </div>
  )
}


export default Profile;