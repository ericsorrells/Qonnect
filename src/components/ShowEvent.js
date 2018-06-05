// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================
import ShowAcceptance           from './ShowAcceptance';
import ShowEventDisplay         from '../components/ShowEventDisplay';
import AcceptanceModal          from '../components/AcceptanceModal';
import { withRouter }           from 'react-router-dom';
import moment                   from 'moment';
import { createUserAcceptedEventInFirebase } from '../actions/Profile_Actions';
import { isCurrentUser, getCurrentUser }     from '../firebase/auth';
// ========================================================================================
import {
  objToArray,
  formatTime,
  isEventOwner,
  saveToSessionStorage,
  isPreviouslyAcceptedEvent
} from '../utils/utils'
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
    this.props.startGettingEventAcceptances(this.props.eventId);
    saveToSessionStorage(this.props.eventId, this.props.event)
  }

  onEdit() {
    this.props.history.push(`/edit-event/${this.props.eventId}`)
  }

  onDelete() {
    this.props.startDeleteEvent(this.props.userId, this.props.eventId);
  }

  openModal() {
    this.setState({ modalOpen: true })
  }

  closeModal() {
    this.setState({ modalOpen: false })
  }

  userAcceptEvent(acceptanceInfo) {
    const { uid: userId } = getCurrentUser()
    const { eventId, user } = this.props;
    this.props.startUserAcceptEvent(userId, user, eventId, acceptanceInfo)
    this.setState({ modalOpen: false })
  }

  render() {
    const { event, acceptances, eventId, user } = this.props;
    const {uid: userId}                   = getCurrentUser();
    const currentUser                     = isCurrentUser(event.uid);
    const eventOwner                      = isEventOwner(event.uid, userId);
    const previouslyAcceptedEvent         = isPreviouslyAcceptedEvent(eventId, user.acceptedEvents);

    let acceptancesArray, selectedAcceptance, unselectedAcceptances, formattedUnselectedAcceptances;
    if (acceptances) {
      acceptancesArray = objToArray(acceptances);
      selectedAcceptance = acceptances.find((acceptance) => acceptance.selected === true) || null;
      unselectedAcceptances = acceptances.filter((acceptance) => acceptance.selected !== true) || null;
      formattedUnselectedAcceptances = unselectedAcceptances.map((acceptance) =>
        <ShowAcceptance
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
                    <ShowAcceptance
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
              ? <div className='show-event__unselected-acceptances'>{formattedUnselectedAcceptances}</div>
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
        && <button className='button__purple show-event__button' onClick={openModal}>I'd Like To Go!</button>
      }
    </div>
  )
}

const EventInfo = ({name, info}) => {
  return(
    <div>{name}: {info}</div>
 )
}

export const Menu = ({currentUser, eventOwner, onEdit, onDelete}) => {
  return(
    <div>
      {currentUser === true && eventOwner === true &&
        <div className='show-event__button-group show-event__menu'>
          <button
            className='button__purple show-event__button'
            id='show-event__edit-button'
            onClick={onEdit}
          >
            Edit Event
          </button>
          <button
            className='button__purple show-event__button'
            id='show-event__delete-button'
            onClick={onDelete}
          >
            Delete Event
          </button>
        </div>
      }
    </div>
  )
}

ShowEvent.propTypes = {
    event:       PropTypes.object,
    eventId:     PropTypes.string,
    acceptances: PropTypes.array,
    user:        PropTypes.object,
    userId:      PropTypes.string,
    startDeleteEvent:             PropTypes.func,
    startGettingEventAcceptances: PropTypes.func,
    startUserAcceptEvent:         PropTypes.func,
    createUserAcceptedEventInFirebase: PropTypes.func
}

export { ShowEvent };
export default withRouter(ShowEvent);