// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// ========================================================================================
import EventItems from './EventItems';
import EventForm  from './EventForm';
// ========================================================================================

class AddEvent extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // TODO: add method to add event to user 'userEvents' list in Profile
    this.props.createEventInFirebase(event);
  }

  render() {
    return (
      <div className="add-event-container">
        <aside>
          <EventForm 
            event={null} 
            onSubmit={this.handleSubmit}
            profile={this.props.profile}
            auth={this.props.auth}
          />
        </aside>
        <section>
          {
            this.props.events &&
            <EventItems
              events      = {this.props.events}
              history     = {this.props.history}
              deleteEvent = {this.props.deleteEvent}
            />
          }
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