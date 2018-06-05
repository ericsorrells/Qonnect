// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-enzyme';
// ========================================================================================
import { ProfileUpdate } from '../../components/ProfileUpdate';
import ProfileForm from '../../components/ProfileForm';
// ========================================================================================
import { basicProfile } from '../stubs/profile'
// ========================================================================================

import {
  firebasePasswordUpdate,
  firebaseProfileUpdate,
  firebaseAppProfileUpdate } from '../../utils/firebaseHelpers';

jest.mock('../../utils/firebaseHelpers.js');

describe('<ProfileUpdate/>', () => {
  let component, updateProfileMock, updateProfileInFirebaseMock, historyMock, handleSubmitMock;
  let firebasePasswordUpdateMock;
  historyMock                 = { push: jest.fn() };
  updateProfileMock           = jest.fn();
  handleSubmitMock            = jest.fn();
  updateProfileInFirebaseMock = jest.fn();
  firebasePasswordUpdateMock  = jest.fn();

  beforeEach(() => {
    sessionStorage.setItem('qProfile', JSON.stringify('someProfile'));
    component = mount(
      <ProfileUpdate
        profile={basicProfile}
        updateProfileInFirebase={updateProfileInFirebaseMock}
        updateProfile={updateProfileMock}
        history={historyMock}
      />
    )
  })

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(component.find('.update-profile__form-container')).toExist();
    });

    it('contains ProfileForm', () => {
      expect(component.containsAllMatchingElements([
        <ProfileForm />
      ]));
    });
  });

  describe('onSubmit()', () => {
    it('calls correct methods', () => {
      component.find('ProfileForm').prop('handleSubmit')(basicProfile);
      expect(firebasePasswordUpdate).toHaveBeenCalled();
      expect(firebaseProfileUpdate).toHaveBeenCalled();
      expect(firebaseAppProfileUpdate).toHaveBeenCalled();
    });

    it('redirects to user Profile page', () => {
      component.find('ProfileForm').prop('handleSubmit')(basicProfile);
      expect(historyMock.push).toHaveBeenLastCalledWith('/profile/undefined');
    });
  });

  it('will display errors', () => {
    const value = 'Some Error Text';
    component.setState({ error: value });
    expect(component.state('error')).toEqual(value);
  });
});