// ========================================================================================
import React from 'react';
// ========================================================================================
import EventForm from '../components/EventForm';
// ========================================================================================

class EditEvent extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(event) {
    const urlParam = this.props.match.params.id;
    this.props.editEventInFirebase(urlParam, { ...event })
    this.props.history.push(`/show-event/${urlParam}`); 
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