// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
// ========================================================================================

class Search extends React.Component {
  // TODO: sort by date isn't working
  constructor(props) {
    super(props)

    this.state = {
      city:         '',
      date:         '',
      category:     '',
      searchTerm:   '',
      sortBy:       true,
      startDate:    moment(),
      endDate:      null,
      focusedInput: false
    }

    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleCityChange   = this.handleCityChange.bind(this);
    // this.handleDateChange   = this.handleDateChange.bind(this);
    this.handCategoryChange = this.handCategoryChange.bind(this);
    this.handleSearchTerm   = this.handleSearchTerm.bind(this);
    this.handleRadioButton  = this.handleRadioButton.bind(this);
    this.handleClear        = this.handleClear.bind(this);
    this.onFocusChange      = this.onFocusChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilters({
      city:       this.state.city,
      date:       this.state.date,
      category:   this.state.category,
      searchTerm: this.state.searchTerm,
      sortBy:     this.state.sortBy,
      startDate:  this.state.startDate,
      endDate:    moment(this.state.endDate)
    });
  }

  onFocusChange({ focused }) {
    this.setState(() => ({ calendarFocused: focused }))
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value })
  }

  handCategoryChange(e) {
    this.setState({ category: e.target.value })
  }

  handleSearchTerm(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleRadioButton(e) {
    this.setState({ sortBy: !this.state.sortBy })
  }

  handleClear(e) {
    e.preventDefault()
    this.setState({
      city:       '',
      date:       '',
      category:   '',
      searchTerm: '',
      sortBy:     true,
      startDate:  moment(),
      endDate:    null
    });
    this.props.clearFilters()
  }

  render() {
    return (
      <div className='form'>
      <form onSubmit={this.handleSubmit}>
        <label>City:</label>
        <input
          className='form__element form__input'
          placeholder='Search By City Name'
          type='text'
          onChange={this.handleCityChange}
          value={this.state.city}
        />

        <label>Date Range:</label>
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId={`start-date-${moment.now()}`}
          endDate={this.state.endDate}
          endDateId={`end-date-${moment.now()}`}
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
        />

        <label>Category:</label>
        <select
          className='form__element form__select'
          onChange={this.handCategoryChange}
          value={this.state.category ? this.state.category : ''}
        >
          <option disabled selected value=''>Select A Category</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
          <option value="food">Food</option>
          <option value="music">Music</option>
        </select>

        <label>Search Term:</label>
        <input
          className='form__element form__input'
          placeholder='Search By Word'
          type='text'
          onChange={this.handleSearchTerm}
          value={this.state.searchTerm}
        />

        <div className='search__radio-buttons-container'>
          <div>Sort By Date:</div>
          <div className='search__radio-buttons'>
            <div className='search_radio-button-group'>
              <span className='search_radio-button-label'>
                Sooner:
              </span>
              <input type="radio" value='true' checked={this.state.sortBy} onChange={this.handleRadioButton} />
            </div>
            <div className='search_radio-button-group'>
              <span className='search_radio-button-label'>
                Later:
              </span>
              <input type="radio" value='false' checked={!this.state.sortBy} onChange={this.handleRadioButton} />
            </div>
          </div>
        </div>

        <div className='search__buttons'>
          <button type='submit' className='button__purple search_button'>
            Search For Events
          </button>
          <button onClick={this.handleClear} className='button__purple search_button'>
            Clear Form
          </button>
        </div>
      </form>
      </div>
    )
  }
}

export default Search;