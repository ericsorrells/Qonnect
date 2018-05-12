// ========================================================================================
import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
// ========================================================================================

class EventForm extends React.Component {
  constructor(props) {
    super(props)

    const { event } = props;
    this.state = {
      eventName:   event ? event.eventName    : '',
      date:        event ? event.date         : '',
      time:        event ? event.time         : '',
      location:    event ? event.location     : '',
      category:    event ? event.category     : '',
      imageUrl:    event ? event.imageUrl     : '',
      description: event ? event.description  : '',
      focused: ''
    }

    this.onFormSubmit        = this.onFormSubmit.bind(this);
    this.onNameChange        = this.onNameChange.bind(this);
    this.onTimeChange        = this.onTimeChange.bind(this);
    this.onLocationChange    = this.onLocationChange.bind(this);
    this.onCategoryChange    = this.onCategoryChange.bind(this);
    this.onImageUrlChange    = this.onImageUrlChange.bind(this); 
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { firstName, lastName } = this.props.profile;

    this.props.onSubmit({
      userName:    `${firstName} ${lastName}`,
      uid:         this.props.auth.uid,
      eventName:   this.state.eventName,
      date:        moment(this.state.date).valueOf(),
      time:        this.state.time,
      location:    this.state.location,
      category:    this.state.category,
      imageUrl:    this.state.imageUrl,
      description: this.state.description
    })
  }

  onNameChange(e) {
    this.setState({ eventName: e.target.value })
  }

  onTimeChange(e) {
    console.log('TIME: ', e.target.value);
    this.setState({ time: e.target.value  })
  }

  onLocationChange(e) {
    this.setState({ location: e.target.value })
  }

  onCategoryChange(e){
    this.setState({ category: e.target.value })
  }

  onImageUrlChange(e) {
    this.setState({ imageUrl: e.target.value })
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value })
  }

  onFocusChange({ focused }) {
    this.setState(() => ({ calendarFocused: focused }))
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
          <SingleDatePicker
            date={this.state.date}
            onDateChange={ date => this.setState({ date: date }) }
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            numberOfMonths={1}
            isOutsideRange={() => false} 
          />

          <label>Time:</label>
          <input type='time' onChange={this.onTimeChange}/>
          <label> Event Location: </label>
          <input
            type='text'
            onChange={this.onLocationChange}
            value={this.state.location}
          />

          <label>Category:</label>          
          <select onChange={this.onCategoryChange} value={this.state.category ? this.state.category : ''}>
            <option disabled selected value=''>Select A Category</option>
            <option value="Sports">Sports</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Music">Music</option>
            <option value="Miscellaneous">Miscellaneous</option>
          </select>

          <label>Image URL:</label>
          <input
            type='text'
            onChange={this.onImageUrlChange}
            value={this.state.imageUrl}
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