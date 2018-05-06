// ========================================================================================
import React from 'react';
import PropTypes from 'prop-types';
import { EIDRM } from 'constants';
// ========================================================================================

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      city:       '',
      date:       '',
      category:   '',
      searchTerm: '',
      sortBy:     true
    }

    this.handleSubmit       = this.handleSubmit.bind(this);
    this.handleCityChange   = this.handleCityChange.bind(this);
    this.handleDateChange   = this.handleDateChange.bind(this);
    this.handCategoryChange = this.handCategoryChange.bind(this);
    this.handleSearchTerm   = this.handleSearchTerm.bind(this);
    this.handleRadioButton  = this.handleRadioButton.bind(this);
    this.handleClear        = this.handleClear.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilters({
      city:       this.state.city,
      date:       this.state.date,
      category:   this.state.category,
      searchTerm: this.state.searchTerm,
      sortBy:     this.state.sortBy
    });
  }

  handleCityChange(e) {
    this.setState({ city: e.target.value })
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value })
  }

  handCategoryChange(e) {
    this.setState({ category: e.target.value })
  }

  handleSearchTerm(e) {
    this.setState({ searchTerm: e.target.value })
  }

  handleRadioButton(e) {
    console.log('RAIOD', e.target.value);
    this.setState({ sortBy: !this.state.sortBy })
  }

  handleClear(e) {
    this.props.clearFilters();
    this.setState({
      city: '',
      date: '',
      category: '',
      searchTerm: '',
      sortBy: true
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>City:</label>
        <input type='text' onChange={this.handleCityChange} value={this.state.city}/>

        <label>Date:</label>
        <input type='text' onChange={this.handleDateChange} value={this.state.date}/>

        <label>Category:</label>
        <select onChange={this.handCategoryChange} value={this.state.category ? this.state.category : ''}>
          <option disabled selected value=''>Select A Category</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
          <option value="food">Food</option>
          <option value="music">Music</option>
        </select>

        <label>Search Term:</label>
        <input type='text' onChange={this.handleSearchTerm} value={this.state.searchTerm}/>
        <br/>

        <span>Sort By Date:</span>
        Sooner<input type="radio" value='true' checked={this.state.sortBy}  onChange={this.handleRadioButton}/>
        Later<input type="radio" value='false' checked={!this.state.sortBy} onChange={this.handleRadioButton}/>

        <br/>
          <button type='submit'>Search For Events</button>
          <button onClick={this.handleClear}>Clear</button>
      </form>
    )
  }
}

export default Search;