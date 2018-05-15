// ========================================================================================
import React from 'react';
// ========================================================================================
import ShowAcceptance           from './ShowAcceptance';
import ShowAcceptance_Container from '../containers/ShowAcceptance_Container';
import ShowEventDisplay         from '../components/ShowEventDisplay';
import AcceptanceModal          from '../components/AcceptanceModal';
import { withRouter }           from 'react-router-dom';
import moment                   from 'moment';
import { isCurrentUser, getCurrentUser } from '../firebase/auth';
// ========================================================================================
import { objToArray, formatTime, isEventOwner } from '../utils/utils'
// ========================================================================================

class ShowEvent extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      modalOpen: false
    }

    this.openModal       = this.openModal.bind(this);
    this.closeModal      = this.closeModal.bind(this);
    this.userAcceptEvent = this.userAcceptEvent.bind(this);
    this.onEdit          = this.onEdit.bind(this);
    this.onDelete        = this.onDelete.bind(this);
    // TODO: how to hangle a browser refresh??
    // https://stackoverflow.com/questions/37195590/how-can-i-persist-redux-state-tree-on-refresh/37197370
    if(!this.props.event) {
      this.props.history.push('/')
    }
  }

  onEdit() {
    this.props.history.push(`/edit-event/${this.props.eventId}`)
  }

  onDelete() {
    const user = getCurrentUser()
    this.props.deleteEventInFirebase(this.props.eventId);
    this.props.history.push(`/profile/${user.uid}`)
  }

  componentDidMount(){
    this.props.getEventAcceptrancesFromFirebase(this.props.eventId);
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  userAcceptEvent(acceptanceInfo) {
    const user = getCurrentUser()
    const { eventId } = this.props;
    this.props.createInterestedUserInFirebase(eventId, user.uid)
    this.props.createAcceptanceInFirebase({
      eventId: eventId,
      userId: user.uid,
      userName: `${this.props.userFirstName} ${this.props.userLastName}`,
      acceptanceNote: acceptanceInfo.acceptanceNote,
      selected: false,
      createAt: moment.now()
    })
  }

  render() {
    const { event, acceptances, eventId } = this.props;
    const userId = getCurrentUser().uid;
    let acceptancesArray, selectedAcceptance, unselectedAcceptances, formattedUnselectedAcceptances;
    if (acceptances) {
      acceptancesArray = objToArray(acceptances);
      selectedAcceptance = acceptances.find((acceptance) => acceptance.selected === true) || null;
      unselectedAcceptances = acceptances.filter((acceptance) => acceptance.selected !== true) || null;
      formattedUnselectedAcceptances = unselectedAcceptances.map((acceptance) => <ShowAcceptance_Container 
                                                                                    acceptance={acceptance} 
                                                                                    eventId={eventId} 
                                                                                    userId={userId}
                                                                                  />)
    }

    return (
      <div className='show-event container'>
        {event && event.imageUrl && <img src={event.imageUrl} className='show-event__image' />}
        <div>
          {event && <ShowEventDisplay event={event} />}
          Selected: {selectedAcceptance ? <div className='show-event__selected-acceptance'>{selectedAcceptance.acceptance}</div> : 'Open Event'} <br />
          Acceptances: {formattedUnselectedAcceptances ? <ul>{formattedUnselectedAcceptances}</ul> : 'None'}
          {isCurrentUser(event.uid) && isEventOwner(event.uid, userId) && <Menu onEdit={this.onEdit} onDelete={this.onDelete}/>}
          {!isCurrentUser(event.uid) && !isEventOwner(event.uid, userId) && <button onClick={this.openModal}>Accept Invitation</button>}
          <AcceptanceModal
            modalOpen={this.state.modalOpen}
            closeModal={this.closeModal}
            event={event}
            userAcceptEvent={this.userAcceptEvent} 
          />
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

const Menu = (props) => {
  return(
    <div>
      <button onClick={props.onEdit}>Edit</button>
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default withRouter(ShowEvent);