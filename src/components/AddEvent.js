// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
// ========================================================================================
import EventItems from './EventItems';
import EventForm  from './EventForm';
// ========================================================================================

class AddEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventName:     '',
      location: '',
      description: '',
      imageUrl: ''
    }

    // this.handleNameChange        = this.handleNameChange.bind(this);
    // this.handleLocationChange    = this.handleLocationChange.bind(this);
    // this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit            = this.handleSubmit.bind(this);
  }

  // handleNameChange(e) {
  //   e.preventDefault()
  //   this.setState({ eventName: e.target.value });
  // }

  // handleLocationChange(e) {
  //   e.preventDefault();
  //   this.setState({ location: e.target.value })
  // }

  // handleDescriptionChange(e) {
  //   e.preventDefault();
  //   this.setState({ description: e.target.value })
  // }

  handleSubmit(event) {
    this.props.createEventInFirebase(event)
  }

  render() {
    return (
      <div className="add-event-container">
        <aside>
          <EventForm event={null} onSubmit={this.handleSubmit}/>
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