// ========================================================================================
import React from 'react';
// ========================================================================================
import EventForm from '../components/EventForm';
// ========================================================================================

// TODO: Can this be a stateless component???
class EditEvent extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { id, eventName, date, time, location, description } = event;
    // TODO: add support for persisting edited data to Firebase
    this.props.editEvent(id, { ...event })
    this.props.history.push(`/show-event/${id}`); 
  }

  render() {
    return (
      <div>
        <EventForm
          event={this.props.event}
          onSubmit={this.onSubmit}
          profile={this.props.profile}
          auth={this.props.auth}
        />
      </div>
    )
  }
}

export default EditEvent;