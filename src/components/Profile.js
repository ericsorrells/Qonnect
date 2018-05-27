// ========================================================================================
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebaseIndex';
import { withRouter } from 'react-router-dom';
import { history } from '../router/AppRouter';
import { firebase } from '../firebase/firebaseIndex';
// ========================================================================================
import EventItem  from './EventItem';
import UserInfo   from './UserInfo';
import UserStats  from '../containers/UserStats_Container';
import EventItems from './EventItems';
// ========================================================================================
import { objToArray, getCurrentUserId } from '../utils/utils';
// ========================================================================================

class Profile extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.startGetProfile(this.props.match.params.id);
  }

  componentDidUnmount() {
    if (this.props.match.params.id !== this.props.userId) {
      this.props.startGetProfile(this.props.userId);
    }
  }

  render(){
    let { events, history, profile, deleteEvent, urlParam, userId } = this.props;
    return(
      <div className="profile">
        <div>
          <div className="profile__user-stats">
            <section>
              <div className='profile__user-stats-inner-container'>
                <UserStats />
              </div>
            </section>
          </div>
        </div>
        <div className="profile__outer-container">
          <div className="container profile__inner-container">
            <aside className="aside-container">
              <UserInfo {...profile} urlParam={urlParam} userId={userId} />
            </aside>
            <section>
              <div className='profile__section-inner-container'>
              <EventsHeader history={history} />
              {events &&
                <EventItems
                  events={events}
                  history={history}
                  deleteEvent={deleteEvent}
                />
              }
              </div>
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