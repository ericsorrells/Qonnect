// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
// ========================================================================================
import HowItWorksItem from '../../components/HowItWorksItem';
// ========================================================================================

describe('<HowItWorksItems/>', () => {
  const title = 'My Cool Title';
  const icon  = 'fontAwesomeIcon';
  const text  = 'Some awesome text'

  const component = shallow(
    <HowItWorksItem
      title={title}
      icon={icon}
      text={text}
    />
  )

  it('should render with correct data', () => {
    expect(component.find('.how-it-works__title')).toHaveText(title);
    expect(component.find('i')).toHaveProp('className', icon);
    expect(component.find('.how-it-works__text')).toHaveText(text);
  });
});