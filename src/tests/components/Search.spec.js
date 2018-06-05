// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-enzyme';
import moment from 'moment';
// ========================================================================================
import { Search } from '../../components/Search';
// ========================================================================================

describe('<Search/>', () => {
  const setFilters   = jest.fn();
  const clearFilters = jest.fn();

  const component = shallow(
    <Search
      setFilters={setFilters}
      clearFilters={clearFilters}
    />
  )

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(component.find('#locationInput')).toExist();
      expect(component.find('#dateRangePicker')).toExist();
      expect(component.find('#categoryInput')).toExist();
      expect(component.find('#searchTermInput')).toExist();
      expect(component.find('#soonerSort')).toExist();
      expect(component.find('#laterSort')).toExist();
      expect(component.find('#searchButton')).toExist();
      expect(component.find('#clearButton')).toExist();
    });
  });

  describe('allows users to search by', () => {
    it('location', () => {
      const value = 'Atlanta';
      component.find('#locationInput').simulate('change', { target: { value } });
      expect(component.state('location')).toBe(value)
    });

    it('date', () => {
      const startDate = moment(0).add(4, 'days');
      const endDate   = moment(0).add(8, 'days');
      component.find('#dateRangePicker').prop('onDatesChange')({ startDate, endDate });
      expect(component.state('endDate')).toEqual(endDate);
    });

    it('category', () => {
      const value = 'Music';
      component.find('#categoryInput').simulate('change', { target: { value } });
      expect(component.state('category')).toBe(value)
    });

    it('search term', () => {
      const value = 'Some Term';
      component.find('#searchTermInput').simulate('change', { target: { value } });
      expect(component.state('searchTerm')).toBe(value)
    });
  });

  it('allows user to sort by date', () => {
    component.find('#laterSort').simulate('change', { target: { sortBy: false } })
    expect(component.state('sortBy')).toBe(false);
  });

  it('calls setFilters()', () => {
    component.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(setFilters).toHaveBeenCalled();
  });

  it('clears filters', () => {
    const value = 'Some Term';
    component.find('#searchTermInput').simulate('change', { target: { value } });
    component.find('#clearButton').simulate('click', { preventDefault: () => { } });
    expect(clearFilters).toHaveBeenCalled();
    expect(component.state('searchTerm')).toBe('');
  });
});