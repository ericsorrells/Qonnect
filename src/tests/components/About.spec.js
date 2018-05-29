// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
// ========================================================================================
import About from '../../components/About';
// ========================================================================================

describe('<About />', () => {
  const component = shallow(<About />);
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('should include the correct text', () => {
    expect(component).toIncludeText('Coming Soon...');
  });
});