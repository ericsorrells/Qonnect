import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

test('testing', () => {
  component = shallow(<Home />);
  expect(component).toHaveText('Text');
});