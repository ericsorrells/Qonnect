// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// ========================================================================================
import EventItems from './EventItems';
import EventForm  from './EventForm';
// ========================================================================================
import { getCurrentUser } from '../firebase/auth';
import { startGetProfile } from '../actions/Profile_Actions';
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

  componentDidMount(){
    const { userId, events } = this.props
    const eventIds = getEventUserIDs(events)
    const hasEvents = events.length === 0;
    const areUserEvents = eventIds.includes(userId);
    
    if(userId && (hasEvents || !areUserEvents)) {
      this.props.startGetProfile(userId);
    }
  }

  render() {
    return (
      <div className='add-event-container padding-left'>
        <aside>
          <EventForm
            event    = {null}
            onSubmit = {this.handleSubmit}
            profile  = {this.props.profile}
            auth     = {this.props.auth}
          />
        </aside>
        <section className='add-event__section'>
          <div className='add-event__inner-container'>
            {
              this.props.events &&
              <EventItems
                events      = {this.props.events}
                history     = {this.props.history}
                deleteEvent = {this.props.deleteEvent}
              />
            } 
          </div>
        </section>
      </div>
    )
  }
}

AddEvent.propTypes = {
  events:      PropTypes.array,
  history:     PropTypes.func,
  deleteEvent: PropTypes.func
};

export default AddEvent;