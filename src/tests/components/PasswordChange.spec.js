// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import PasswordChange from '../../components/PasswordChange';
// ========================================================================================

// TODO TEST
describe('<PasswordChange/>', () => {
  it('should render correctly', () => {

  });

  it('should call doPasswordUpdate()', () => {
    // TODO: does 'doPasswordUpdate' call sagas?
    // const doPasswordUpdate = jest.fn();
    // const component = shallow(<LogIn doPasswordUpdate={doPasswordUpdate} />);
    // component.find('button').simulate('click')
    // expect(doPasswordUpdate).toHaveBeenCalled();
  });
});