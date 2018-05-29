// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================
import EventForm from '../components/EventForm';
// ========================================================================================

class EditEvent extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.secureRoute = this.secureRoute.bind(this);
  }

  onSubmit(event) {
    const urlParam = this.props.match.params.id;
    this.props.startEditEvent(urlParam, { ...event })
  }

  secureRoute(event, auth, history) {
    if (event.uid !== auth.uid) {
      history.push(`/not-found`)
    }
  }

  render() {
    const { event, auth, history } = this.props;
    // TODO: this doesn't work with deelink - props not available
    this.secureRoute(event, auth, history);
    
    return (
      <div className='edit-event'>
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

EditEvent.propTypes = {
  event:   PropTypes.object,
  profile: PropTypes.object,
  auth:    PropTypes.object 
}

export default EditEvent;