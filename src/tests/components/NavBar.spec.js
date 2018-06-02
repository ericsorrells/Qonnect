// ========================================================================================
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';
import { MemoryRouter } from 'react-router-dom';
import 'jest-enzyme';
// ========================================================================================
import NavBar, { NavigationAuth } from '../../components/NavBar';
// ========================================================================================
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<NavBar />', () => {
  it('displays secure NavBar when logged in', () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
          <NavBar user={basicProfile} />
        </MemoryRouter>
      </Provider>
    )
    expect(component.find('.nav-auth__container')).toExist();
  });

  it('displays non-secure NavBar when not logged in', () => {
    const component = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[{ key: 'testKey' }]} >
          <NavBar />
        </MemoryRouter>
      </Provider>
    )
    expect(component.find('.nav-auth__container')).not.toExist();
  });
});