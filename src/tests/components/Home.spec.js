// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
// ========================================================================================
import Home from '../../components/Home';
import HomeBillboard from '../../components/HomeBillBoard';
import HowItWorks    from '../../components/HowItWorks';
// ========================================================================================

describe('<Home />', () => {
  const component = shallow(<Home />);

  it('renders correct', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders child components', () => {
    expect(component.containsAllMatchingElements([
      <HomeBillboard/>,
      <HowItWorks />
    ])).toBeTruthy()
  });
});