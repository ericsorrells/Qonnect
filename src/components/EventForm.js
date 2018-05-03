import React from 'react';

class EventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      location: '',
      description: ''
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
      name:        this.state.name,
      date:        this.state.date,
      location:    this.state.location,
      description: this.state.descrption 
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
      <div>
        <form onSubmit={this.onFormSubmit} >
          <div className='event-form__label'>
            Event Name:
          </div>
          <input type='text' onChange={this.onNameChange} />

          <div className='event-form__label'>
            Event Date:
          </div>
          <input type='text' onChange={this.onDateChange}/>

          <div className='event-form__label'>
            Event Location:
          </div>
          <input type='text' onChange={this.onLocationChange}/>

          <div className='event-form__label'>
            Description:
          </div>
          <textarea onChange={this.onDescriptionChange}/>

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default EventForm;