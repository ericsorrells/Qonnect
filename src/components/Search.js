// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// ========================================================================================
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { setFilters, clearFilters } from '../actions/Filters_Actions';
// ========================================================================================

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      location:     '',
      date:         '',
      category:     '',
      searchTerm:   '',
      sortBy:       true,
      startDate:    moment(),
      endDate:      null,
      focusedInput: false
    }

    this.handleSubmit         = this.handleSubmit.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    // this.handleDateChange   = this.handleDateChange.bind(this);
    this.handCategoryChange   = this.handCategoryChange.bind(this);
    this.handleSearchTerm     = this.handleSearchTerm.bind(this);
    this.handleRadioButton    = this.handleRadioButton.bind(this);
    this.handleClear          = this.handleClear.bind(this);
    this.onFocusChange      = this.onFocusChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilters({
      location:   this.state.location,
      date:       this.state.date,
      category:   this.state.category,
      searchTerm: this.state.searchTerm,
      sortBy:     this.state.sortBy,
      startDate:  moment(this.state.startDate).valueOf(),
      endDate:    moment(this.state.endDate).valueOf()
    });
  }

  onFocusChange({ focused }) {
    this.setState(() => ({ calendarFocused: focused }))
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value })
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
      <div className='form search__form'>
      <form onSubmit={this.handleSubmit}>
        <label>Location:</label>
        <input
          className='form__element form__input'
          placeholder='Search By Address Term (Address, City, State)'
          type='text'
          onChange={this.handleLocationChange}
          value={this.state.location}
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
          <option value="Sports">Sports</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Music">Music</option>
          <option value="Miscellaneous">Miscellaneous</option>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: (searchParams) => dispatch(setFilters(searchParams)),
    clearFilters: () => dispatch(clearFilters())
  }
}

export default connect(null, mapDispatchToProps)(Search)
