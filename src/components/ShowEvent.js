// ========================================================================================
import React from 'react';
// ========================================================================================
import ShowAcceptance           from './ShowAcceptance';
import ShowAcceptance_Container from '../containers/ShowAcceptance_Container';
import { withRouter }           from 'react-router-dom';
import { isCurrentUser }        from '../firebase/auth';
import moment                   from 'moment';
// ========================================================================================
import { objToArray, formatTime } from '../utils/utils'
// ========================================================================================

class ShowEvent extends React.Component {
  constructor(props){
    super(props)

    // TODO: how to hangle a browser refresh??
    // https://stackoverflow.com/questions/37195590/how-can-i-persist-redux-state-tree-on-refresh/37197370
    if(!this.props.event) {
      this.props.history.push('/profile')
    }
  }

  render() {
    const { event, acceptances, eventId } = this.props;
    let acceptancesArray, selectedAcceptance, unselectedAcceptances, formattedUnselectedAcceptances;
    if(acceptances) {
      acceptancesArray = objToArray(acceptances);
      selectedAcceptance = acceptances.find((acceptance) => acceptance.selected === true) || null;
      unselectedAcceptances = acceptances.filter((acceptance) => acceptance.selected !== true) || null;
      formattedUnselectedAcceptances = unselectedAcceptances.map((acceptance) => <ShowAcceptance_Container eventId={eventId} acceptance={acceptance} />)
    }
    
    return(
      <div className='show-event container'>
        { event && event.imageUrl && <img src={event.imageUrl} className='show-event__image'/> }
        <div>
          {event && event.eventName   && <EventInfo name='Name'        info={event.eventName} />}
          {event && event.date        && <EventInfo name='Date'        info={event.date} />}
          {event && event.time        && <EventInfo name='Time'        info={event.time} />}
          {event && event.category    && <EventInfo name='Category'    info={event.category} />}
          {event && event.userName    && <EventInfo name='Inviter'     info={event.userName} />}
          {event && event.location    && <EventInfo name='Location'    info={event.location} />}
          {event && event.description && <EventInfo name='Description' info={event.description} />}
          Selected: {selectedAcceptance ? <div className='show-event__selected-acceptance'>{selectedAcceptance.acceptance}</div> : 'Open Event'} <br />
          Acceptances: {formattedUnselectedAcceptances ? <ul>{formattedUnselectedAcceptances}</ul> : 'None'}
          { isCurrentUser(event.uid) && <Menu /> }
          { !isCurrentUser(event.id) && <AcceptInvite />}
        </div>
      </div>
    )
  }
}

const EventInfo = ({name, info}) => {
  return(
    <div>{name}: {info}</div>
  )
}

const Menu = () => {
  return(
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

const AcceptInvite = () => {
  return(
    <div>
      <button>Accept Invitation</button>
    </div>
  )
}

export default withRouter(ShowEvent);