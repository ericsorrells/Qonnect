// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import UserStat from '../../components/UserStat';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<UserStat/>', () => {
  it('renders correctly', () => {
    const component = shallow(
      <UserStat
        stat={43}
        title={'Some Stat'}
      />
    )

    expect(component).toMatchSnapshot();
  });
});
