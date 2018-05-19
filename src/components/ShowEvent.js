// ========================================================================================
import React from 'react';
// ========================================================================================
import ShowAcceptance           from './ShowAcceptance';
import ShowAcceptance_Container from '../containers/ShowAcceptance_Container';
import ShowEventDisplay         from '../components/ShowEventDisplay';
import AcceptanceModal          from '../components/AcceptanceModal';
import { withRouter }           from 'react-router-dom';
import moment                   from 'moment';
import { createUserAcceptedEventInFirebase } from '../actions/Profile_Actions';
import { isCurrentUser, getCurrentUser }     from '../firebase/auth';
// ========================================================================================
import { objToArray, formatTime, isEventOwner, saveToSessionStorage, isPreviouslyAcceptedEvent } from '../utils/utils'
// ========================================================================================

class ShowEvent extends React.Component {
  // TODO: remove 'thumbs-up' icon when an event is selected
  constructor(props){
    super(props)

    this.state = {
      modalOpen: false,
    }

    this.openModal       = this.openModal.bind(this);
    this.closeModal      = this.closeModal.bind(this);
    this.userAcceptEvent = this.userAcceptEvent.bind(this);
    this.onEdit          = this.onEdit.bind(this);
    this.onDelete        = this.onDelete.bind(this);

    if(!this.props.event) {
      this.props.history.push('/')
    }
  }

  componentDidMount(){
    this.props.getEventAcceptancesFromFirebase(this.props.eventId);
    saveToSessionStorage(this.props.match.params.id, this.props.event)
  }

  onEdit() {
    this.props.history.push(`/edit-event/${this.props.eventId}`)
  }

  onDelete() {
    const user = getCurrentUser()
    this.props.deleteEventInFirebase(this.props.eventId);
    this.props.deleteUserEventListFromFirebase(user.uid, this.props.eventId)
    this.props.history.push(`/profile/${user.uid}`)
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
    this.props.createInterestedUserInFirebase(eventId, user.uid);
    this.props.getEventAcceptancesFromFirebase()
    this.props.createAcceptanceInFirebase({
      eventId: eventId,
      userId: user.uid,
      userName: `${this.props.user.firstName} ${this.props.user.lastName}`,
      acceptanceNote: acceptanceInfo.acceptanceNote,
      selected: false,
      createAt: moment.now()
    })
    this.props.createUserAcceptedEventInFirebase(user.uid, eventId)
  }

  render() {
    const { event, acceptances, eventId, user } = this.props;
    const {uid: userId}                   = getCurrentUser();
    const currentUser                     = isCurrentUser(event.uid);
    const eventOwner                      = isEventOwner(event.uid, userId);
    const previouslyAcceptedEvent         = isPreviouslyAcceptedEvent(eventId, user.acceptedEvents)

    let acceptancesArray, selectedAcceptance, unselectedAcceptances, formattedUnselectedAcceptances;
    if (acceptances) {
      acceptancesArray = objToArray(acceptances);
      selectedAcceptance = acceptances.find((acceptance) => acceptance.selected === true) || null;
      unselectedAcceptances = acceptances.filter((acceptance) => acceptance.selected !== true) || null;
      formattedUnselectedAcceptances = unselectedAcceptances.map((acceptance) =>
        <ShowAcceptance_Container
          acceptance={acceptance}
          eventId={eventId}
          userId={userId}
          event={event}
          user={user}
        />)
    }

    return (
      <div className='show-event container'>
        <div className='show-event__image-container'>
          {event && event.imageUrl && <img src={event.imageUrl} className='show-event__image' />}
          <Menu
            currentUser={currentUser}
            eventOwner={eventOwner}
            onEdit={this.onEdit}
            onDelete={this.onDelete}
          />
        </div>
        <div className='show-event__inner-container'>
          {event && <ShowEventDisplay event={event} />}
          <div className='event-display__name-info'>
            <span className='event-display__name'>
              Selected:
            </span>
            {
              selectedAcceptance
              ? <div className='show-event__selected-acceptance'>
                  {
                    <ShowAcceptance_Container
                      acceptance={selectedAcceptance}
                      eventId={eventId}
                      userId={userId}
                      event={event}
                      user={user}
                      selected
                    />
                  }
                </div>
                : <span className='event-display__info'>Open Event</span>
            }
          </div>
          <div className='show-event__acc-container'>
            <div className='event-display__subtitle'>
              <h3> Acceptances: </h3>
            </div>
            {
              formattedUnselectedAcceptances
              ? <div>{formattedUnselectedAcceptances}</div>
              : 'None'
            }
          </div>
          <AcceptInvitationButton
            currentUser={currentUser}
            eventOwner={eventOwner}
            openModal={this.openModal}
            previouslyAcceptedEvent={previouslyAcceptedEvent}
          />
          <AcceptanceModal
            modalOpen={this.state.modalOpen}
            closeModal={this.closeModal}
            event={event}
            userId={userId}
            userAcceptEvent={this.userAcceptEvent}
            createUserAcceptedEventInFirebase={this.createUserAcceptedEventInFirebase}
          />
        </div>
      </div>
    )
  }
}

const AcceptInvitationButton = ({currentUser, eventOwner, openModal, previouslyAcceptedEvent}) => {
  return(
    <div>
      {!currentUser && !eventOwner && !previouslyAcceptedEvent
        && <button onClick={openModal}>Accept Invitation</button>
      }
    </div>
  )
}

const EventInfo = ({name, info}) => {
  return(
    <div>{name}: {info}</div>
 )
}

const Menu = ({currentUser, eventOwner, onEdit, onDelete}) => {
  return(
    <div>
      { currentUser === true && eventOwner === true &&
        <div className='show-event__button-group'>
          <button className='button__purple show-event__button' onClick={onEdit}>Edit Event</button>
          <button className='button__purple show-event__button' onClick={onDelete}>Delete Event</button>
        </div>
      }
    </div>
  )
}

export default withRouter(ShowEvent);