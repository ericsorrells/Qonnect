// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import '../../firebase/firebase';
import 'jest-enzyme';
// ========================================================================================
import { SignIn, SignInForm } from '../../components/SignIn';
import { SignUpLink } from '../../components/SignUp';
// ========================================================================================

describe('<SignIn/>', () => {
  const startSignIn = jest.fn();
  const component = mount(
    <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
      <SignIn
        history={jest.fn()}
        startSignIn={startSignIn}
      />
    </MemoryRouter>
  )

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();

    expect(component.containsAllMatchingElements([
      <SignInForm/>,
      <SignUpLink/>
    ])).toBeTruthy();
  });

  describe('form', () => {
    it('onSubmit() calls startSignIn()', () => {
      const component = shallow(
        <SignInForm
          history={jest.fn()}
          startSignIn={startSignIn}
        />
      )

      component.prop('onSubmit')({ preventDefault: () => { } });
      expect(startSignIn).toHaveBeenCalled();
    });
  });
});