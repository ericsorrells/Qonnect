// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import PasswordChangeForm from '../../components/PasswordChange';
// ========================================================================================

// TODO TEST
describe('<PasswordChange/>', () => {
  const component = shallow(
    <PasswordChangeForm />
  );

  it('should render correctly', () => {
    console.log('COMP', component.debug())
    expect(component.find('#passwordOne')).toExist();
    expect(component.find('#passwordTwo')).toExist();
    expect(component.find('#passwordSubmitButton')).toExist();
  });

  it('should call doPasswordUpdate()', () => {
    // TODO: does 'doPasswordUpdate' call sagas?
    // const doPasswordUpdate = jest.fn();
    // const component = shallow(<LogIn doPasswordUpdate={doPasswordUpdate} />);
    // component.find('button').simulate('click')
    // expect(doPasswordUpdate).toHaveBeenCalled();
  });
});