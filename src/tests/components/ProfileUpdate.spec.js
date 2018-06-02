// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import { StorageMock } from '../../../setupTests';
import 'jest-enzyme';
// ========================================================================================
import { ProfileUpdate } from '../../components/ProfileUpdate';
import ProfileForm from '../../components/ProfileForm';
// ========================================================================================
import { firebasePasswordUpdate } from '../../utils/firebaseHelpers';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

// TODO TEST

describe('<ProfileUpdate/>', () => {
  let component, updateProfileMock, updateProfileInFirebaseMock, historyMock, handleSubmitMock;
  historyMock                 = { push: jest.fn() };
  updateProfileMock           = jest.fn();
  handleSubmitMock            = jest.fn();
  updateProfileInFirebaseMock = jest.fn();

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
      // TODO TEST: how to call methods inside handleSubmit not passed as a prop
      // const firebasePasswordUpdateMock = jest.fn();
      // component.find('ProfileForm').prop('handleSubmit')(basicProfile);
      // expect(firebasePasswordUpdateMock).toHaveBeenCalled();
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