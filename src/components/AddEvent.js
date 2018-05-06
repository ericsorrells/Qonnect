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
      name:     '', 
      location: '',
      description: ''
    }

    this.handleAddEvent          = this.handleAddEvent.bind(this);
    this.handleNameChange        = this.handleNameChange.bind(this);
    this.handleLocationChange    = this.handleLocationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this); 
    this.handleSubmit            = this.handleSubmit.bind(this);
  }

  handleAddEvent(e) {
    e.preventDefault();
    this.props.addEvent({
      name: this.state.name,
      location: this.state.location,
      description: this.state.description
    })
    this.setState({ name: '', location: '', description: '' })
  }

  handleNameChange(e) {
    e.preventDefault()
    this.setState({ name: e.target.value });
  }

  handleLocationChange(e) {
    e.preventDefault();
    this.setState({ location: e.target.value })
  }

  handleDescriptionChange(e) {
    e.preventDefault();
    this.setState({ description: e.target.value })
  }

  handleSubmit(event) {
    // e.preventDefault()
    console.log('HANDLE SUBMIT!!!', event);
    this.props.addEvent(event)
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