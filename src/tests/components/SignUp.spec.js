// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import { SignUpForm, SignUpLink } from '../../components/SignUp';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile';
// ========================================================================================

import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
jest.mock('../../firebase/auth.js');

describe('<SignUp/>', () => {
  const doSignUp      = jest.fn();
  const signIn        = jest.fn();
  const updateProfile = jest.fn();

  const component = mount(
    <SignUpForm
      history={jest.fn()}
      doSignUp={doSignUp}
      signIn={signIn}
      updateProfile={updateProfile}
    />
  )

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  describe('form', () => {
    it('calls doCreateUserWithEmailAndPassword()', () => {
      component.find('form').simulate('submit', {
        preventDefault: () => { }
      });
      expect(doCreateUserWithEmailAndPassword).toHaveBeenCalled();
    });
  });
});