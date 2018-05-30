// ========================================================================================
import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import 'jest-enzyme';
import { Link } from 'react-router-dom';
// ========================================================================================
import HomeBillBoard from '../../components/HomeBillBoard';
// ========================================================================================

describe('<HomeBillBoard />', () => {
  const component = mount(
    <MemoryRouter initialEntries={[ {key: 'testKey' } ]} >
      <HomeBillBoard />
    </MemoryRouter>
  );

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('had a link to the SignUp page', () => {
    expect(component.find('a')).toHaveProp('href', 'signup')
  });
});