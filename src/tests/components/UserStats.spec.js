// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import UserStats from '../../components/UserStats';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<UserStats/>', () => {
  it('renders correctly', () => {
    const component = shallow(
      <UserStats
        totalEvents={1}
        openEvents={2}
        eventsAttended={3}
        followers={4}
        following={5}
      />
    )

    expect(component).toMatchSnapshot();
  });
});
