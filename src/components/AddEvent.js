// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// ========================================================================================
import EventItems from './EventItems';
import EventForm from './EventForm';
import Spinner from './Spinner';
// ========================================================================================
import { getCurrentUser } from '../firebase/auth';
import { startGetProfile } from '../actions/Profile_Actions';
import { startCreateEvent } from '../actions/Events_Actions';
import { getEventUserIDs } from '../utils/utils';
// ========================================================================================

class AddEvent extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.startCreateEvent(event)
  }

  componentDidMount() {
    const { userId, events } = this.props;

    let eventIds = null;
    if (events) {
      eventIds = getEventUserIDs(events);
    }
    const hasEvents          = events.length === 0;
    const areUserEvents      = eventIds.includes(userId);

    if (userId && (hasEvents || !areUserEvents)) {
      this.props.startGetProfile(userId);
    }
  }

  render() {
    const component = this.props.loading.loading
      ? <Spinner />
      : <AddEventComponent {...this.props}
        events={this.props.events}
        history={this.props.history}
        deleteEvent={this.props.deleteEvent}
        onSubmit={this.handleSubmit}
        profile={this.props.profile}
        auth={this.props.auth}
      />
    return (
      <div>
        {component}
      </div>
    )
  }
}

const AddEventComponent = ({ events, history, deleteEvent, onSubmit, profile, auth }) => {
  return (
    <div className='add-event-container padding-left'>
      <aside>
        <EventForm
          event={null}
          onSubmit={onSubmit}
          profile={profile}
          auth={auth}
        />
      </aside>
      <section className='add-event__section'>
        <div className='add-event__inner-container'>
          {
            events &&
            <EventItems
              events={events}
              history={history}
              deleteEvent={deleteEvent}
            />
          }
        </div>
      </section>
    </div>
  )
}

AddEvent.propTypes = {
  events:      PropTypes.array,
  history:     PropTypes.func,
  deleteEvent: PropTypes.func,
  userId:      PropTypes.number,
  profile:     PropTypes.object,
  auth:        PropTypes.object,
  loading:     PropTypes.object
};

export { AddEventComponent };
export default AddEvent;