// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import mockStoreSetup from '../../utils/mockStoreHelpers';
import 'jest-enzyme';
// ========================================================================================
import ShowEventDisplay from '../../components/ShowEventDisplay';
import { basicEvent } from '../stubs/event';
// ========================================================================================

describe('<ShowEventDisplay/>', () => {
  it('should render correctly', () => {
    const component = shallow(<ShowEventDisplay event={basicEvent} />)
    expect(component).toMatchSnapshot();
  });
});