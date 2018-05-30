// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
// ========================================================================================
import HowItWorks from '../../components/HowItWorks';
// ========================================================================================

describe('<HowItWorks />', () => {
  const component = shallow(<HowItWorks/>)

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders all three child elements', () => {
    expect(component.find('.how-it-works__inner-container').children().length).toBe(3);
  });
});
