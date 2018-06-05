// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import PrivateRoute from '../../components/PrivateRoute';
import FindEvents   from '../../components/FindEvents';
import { isAuthenticated } from '../../firebase/firebase';
// ========================================================================================

// TODO TEST: conditional rendering not working bc isAuthenticated
// in component is not being changed
jest.mock('../../firebase/firebase');

describe('<PrivateRoute />', () => {
  const component = mount(
    <MemoryRouter>
      <PrivateRoute path="/find-events" component={FindEvents} />
    </MemoryRouter>
  )

  describe('when authenticated', () => {
    it.only('renders the correct component', () => {
      expect(isAuthenticated).toHaveBeenCalled()
    });
  });

  describe('when not authenticated', () => {
    it('redirects to the correct location', () => {

    });
  });
});