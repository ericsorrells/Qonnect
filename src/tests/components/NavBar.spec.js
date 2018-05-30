// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-enzyme';
// ========================================================================================
import NavBar from '../../components/NavBar';
import SignOutButton from '../../components/SignOutButton';
// ========================================================================================
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<NavBar />', () => {
  it('displays secure NavBar when logged in', () => {
    const component = shallow(
      <MemoryRouter initialEntries={[ {key: 'testKey' } ]} >
      <Navbar user={basicProfile} />
      </MemoryRouter>
    )
    console.log('NAVABAR: ', component.debug());

  });

  it('displays non-secure NavBar when not logged in', () => {

  });
});