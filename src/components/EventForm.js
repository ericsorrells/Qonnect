import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props)
    const { id, name, date, location, description } = this.props.event;
    
    this.state = {
      id:          id || 1,
      name:        name ? name:               '',
      date:        date ? date:               '',
      location:    location ? location:       '',
      description: description ? description: ''
    }

    this.onFormSubmit        = this.onFormSubmit.bind(this);
    this.onNameChange        = this.onNameChange.bind(this);
    this.onDateChange        = this.onDateChange.bind(this);
    this.onLocationChange    = this.onLocationChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      id:          this.state.id,
      name:        this.state.name,
      date:        this.state.date,
      location:    this.state.location,
      description: this.state.description 
    })
  }

  onNameChange(e) {
    this.setState({ name: e.target.value })
  }

  onDateChange(e) {
    this.setState({ date: e.target.value })
  }

  onLocationChange(e) {
    this.setState({ location: e.target.value })
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.onFormSubmit} >
          <label> Event Name: </label>
          <input 
            type='text' 
            onChange={this.onNameChange} 
            value={this.state.name}
          />

          <label> Event Date: </label>
          <input 
            type='text' 
            onChange={this.onDateChange}
            value={this.state.date}
          />

          <label> Event Location: </label>
          <input 
            type='text' 
            onChange={this.onLocationChange}
            value={this.state.location}
          />

          <label> Description: </label>
          <textarea 
            onChange={this.onDescriptionChange}
            value={this.state.description}  
          />

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default EventForm;