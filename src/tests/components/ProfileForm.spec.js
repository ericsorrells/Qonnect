// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import ProfileForm from '../../components/ProfileForm';
// ========================================================================================
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<ProfileForm />', () => {
  const handleSubmit = jest.fn();
  const user = {
    displayName: 'awesomeMe!',
    email: 'me@me.com'
  }

  const fullForm = mount(
    <ProfileForm
      handleSubmit={handleSubmit}
      user={user}
      profile={basicProfile}
    />
  )

  const emptyForm = shallow(
    <ProfileForm
      handleSubmit={handleSubmit}
      user={{}}
      profile={{}}
    />
  )

  describe('rendering', () => {
    it('renders empty form on profile creation', () => {
      expect(emptyForm.find('#firstNameInput').props().value).toEqual('');
      expect(emptyForm.find('#lastNameInput').props().value).toEqual('');
      expect(emptyForm.find('#photoUrlInput').props().value).toEqual('');
      expect(emptyForm.find('#cityInput').props().value).toEqual('');
      expect(emptyForm.find('#stateInput').props().value).toEqual('');
      expect(emptyForm.find('#birthdayInput').props().value).toEqual('');
      expect(emptyForm.find('#descriptionInput').props().value).toEqual('');
      expect(emptyForm.find('#firstNameInput').props().value).toEqual('');

    });

    it('contains previously entered data on profile edit', () => {
      expect(fullForm.find('#firstNameInput').props().value).toEqual(basicProfile.firstName);
      expect(fullForm.find('#lastNameInput').props().value).toEqual(basicProfile.lastName);
      expect(fullForm.find('#photoUrlInput').props().value).toEqual(basicProfile.photoURL);
      expect(fullForm.find('#cityInput').props().value).toEqual(basicProfile.city);
      expect(fullForm.find('#stateInput').props().value).toEqual(basicProfile.state);
      expect(fullForm.find('#birthdayInput').props().value).toEqual(basicProfile.birthDate);
      expect(fullForm.find('#descriptionInput').props().value).toEqual(basicProfile.description);
      expect(fullForm.find('#firstNameInput').props().value).toEqual(basicProfile.firstName);
    });
  });

  describe('form inputs', () => {
    it('allows you to enter User Name', () => {
      const value = 'coolJoe';
      emptyForm.find('#userNameInput').simulate('change', { target: { value } });
      expect(emptyForm.state('displayName')).toBe(value)
    });

    it('allows you to enter First Name', () => {
      const value = basicProfile.firstName;
      emptyForm.find('#firstNameInput').simulate('change', { target: { value } });
      expect(emptyForm.state('firstName')).toBe(value)
    });

    it('allows you to enter Last Name', () => {
      const value = basicProfile.lastName;
      emptyForm.find('#lastNameInput').simulate('change', { target: { value } });
      expect(emptyForm.state('lastName')).toBe(value)
    });

    it('allows you to enter Email', () => {
      const value = basicProfile.email;
      emptyForm.find('#emailInput').simulate('change', { target: { value } });
      expect(emptyForm.state('email')).toBe(value)
    });

    it('allows you to enter PhotoURL', () => {
      const value = basicProfile.photoURL;
      emptyForm.find('#photoUrlInput').simulate('change', { target: { value } });
      expect(emptyForm.state('photoURL')).toBe(value)
    });

    it('allows you to enter City', () => {
      const value = basicProfile.city;
      emptyForm.find('#cityInput').simulate('change', { target: { value } });
      expect(emptyForm.state('city')).toBe(value)
    });

    it('allows you to enter State', () => {
      const value = basicProfile.state;
      emptyForm.find('#stateInput').simulate('change', { target: { value } });
      expect(emptyForm.state('state')).toBe(value)
    });

    it('allows you to enter Birthday', () => {
      const value = basicProfile.birthDate;
      emptyForm.find('#birthdayInput').simulate('change', { target: { value } });
      expect(emptyForm.state('birthDate')).toBe(value)
    });

    it('allows you to enter Personal Description', () => {
      const value = basicProfile.description;
      emptyForm.find('#descriptionInput').simulate('change', { target: { value } });
      expect(emptyForm.state('description')).toBe(value)
    });

    it('allows you to change your Password', () => {
      const value = 'password';
      emptyForm.find('#passwordInput1').simulate('change', { target: { value } });
      emptyForm.find('#passwordInput2').simulate('change', { target: { value } });
      expect(emptyForm.state('passwordOne')).toBe(value)
      expect(emptyForm.state('passwordTwo')).toBe(value)
    });

    it('handles form submit', () => {
      fullForm.find('form').simulate('submit', {
        preventDefault: () => { }
      });

      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});