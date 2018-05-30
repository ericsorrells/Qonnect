// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
import moment from 'moment';
// ========================================================================================
import Footer from '../../components/Footer';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<Footer />', () => {
  it('renders correctly', () => {
    const component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});