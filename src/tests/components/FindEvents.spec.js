
// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import FindEvents from '../../components/FindEvents';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

// TODO TEST
describe('<FindEvents/>', () => {
  it('renders correctly', () => {
    // snapshot
  });

  it('handles loading correctly', () => {

  });

  it('componentDidMount() calls startGetOtherEvents()', () => {

  });

  describe('componentDidUnmount()', () => {
    it('calls startGetProfile() when userId doesnt match URL param', () => {

    });

    it('doesnt call startGetProfile() when userId does match URL param', () => {

    });
  });
});
