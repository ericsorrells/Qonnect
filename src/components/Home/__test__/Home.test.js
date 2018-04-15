import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

test('testing', () => {
  const component = shallow(<Home />);
  expect(component).toIncludeText('hello');
});