// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebaseIndex';
import { withRouter } from 'react-router-dom';
import { history } from '../router/AppRouter';
import { firebase } from '../firebase/firebaseIndex';
// ========================================================================================
import EventItem from './EventItem';
import UserInfo from './UserInfo';
import UserStats from '../containers/UserStats_Container';
import EventItems from './EventItems';
// ========================================================================================
import { objToArray, getCurrentUserId } from '../utils/utils';
// ========================================================================================

class Profile extends React.Component {

  loadData(user){
    this.props.getProfileFromFirebase(user.uid)
    this.props.setProfile({ 
      displayName: user.displayName, 
      photoURL:    user.photoURL,
      email:       user.email 
    })
    this.props.getUserEventsFromFirebase(user.uid)
  }

  componentDidMount(){
    let user = getCurrentUserId(auth.getCurrentUser());
    this.loadData(user);
    sessionStorage.setItem('qProfile', JSON.stringify(user))
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

const EventsHeader = (props) => {
  const handleClick = () =>  props.history.push(`/add-event/`)
  
  return(
    <div className='events-header'>
      <h1>My Events!</h1>
      <button className='events-header__button' onClick={handleClick}>Create</button>
    </div>
  )
}


export default withRouter(Profile);