// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import UserInfo from '../../components/UserInfo';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<UserInfo/>', () => {
  const component = shallow(
    <UserInfo
    displayName={'coolUser'}
    firstName={basicProfile.firstName}
    email={'johndoe@email.com'}
    photoURL={basicProfile.photoURL}
    lastName={basicProfile.lastName}
    city={basicProfile.city}
    state={basicProfile.state}
    birthDate={basicProfile.birthDate}
    createdAt={basicProfile.createdAt}
    description={basicProfile.description}
    urlParam={'abc123'}
    userId={'abc123'}
    />
  )

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  describe('Update button', () => {
    it('allows correct user to update their info', () => {
      expect(component.find('button')).toExist();
    });

    it('prevents incorrect user from updating anothers info', () => {
      component.setProps({ userId: 'xyz789' });
      expect(component.find('button')).not.toExist();
    });
  });
});
