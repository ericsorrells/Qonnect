// ========================================================================================
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';
// ========================================================================================
import PasswordChangeForm from '../../components/PasswordChange';
// ========================================================================================

import { doPasswordUpdate } from '../../firebase/auth';

jest.mock('../../firebase/auth.js');

describe('<PasswordChange/>', () => {
  const component = mount(
    <PasswordChangeForm />
  );

  it('should render correctly', () => {
    expect(component.find('#passwordOne')).toExist();
    expect(component.find('#passwordTwo')).toExist();
    expect(component.find('#passwordSubmitButton')).toExist();
  });

  it.only('should call doPasswordUpdate()', () => {
    const value = 'password';
    component.find('#passwordOne').simulate('change', { target: { value } });
    component.find('#passwordTwo').simulate('change', { target: { value } });

    component.find('form').simulate('submit', {
      preventDefault: () => { }
    });

    expect(doPasswordUpdate).toHaveBeenCalled();
//    TODO: does 'doPasswordUpdate' call sagas?
  });
});