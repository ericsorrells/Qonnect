// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import { SignOutButton } from '../../components/SignOutButton';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<SignOutButton/>', () => {
  const startSignOut = jest.fn();
  const component = shallow(
    <SignOutButton
      startSignOut={startSignOut}
    />
  )

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  })

  it('calls startSignOut()', () => {
    component.find('a').simulate('click')
    expect(startSignOut).toHaveBeenCalled();
  });
});