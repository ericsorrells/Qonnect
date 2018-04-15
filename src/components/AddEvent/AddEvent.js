// ========================================================================================
import React from 'react';
// ========================================================================================
import { showEvents } from '../../utils/displayUtils'
// ========================================================================================

class AddEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      name: '', 
      location: '',
      description: ''
    }

    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this); 
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
    console.log('EVENT: ', e.target.value);
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

  render() {
    return (
      <div className="add-event-container">
        <form onSubmit={this.handleAddEvent} className="event-form">
          <input
            type="text"
            placeholder="Add Event Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <br/>
          <input
            type="text"
            placeholder="Add Location"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
          <br/>
          <textarea
            type="text"
            placeholder="Add Description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <br/>
          <button>Add Event</button>
        </form>
        {
          this.props.events && (<ul> { showEvents(this.props.events) } </ul>)
        }
      </div>
    )
  }
}

export default AddEvent;