
// ========================================================================================
import React from 'react';
import { shallow } from 'enzyme';
import 'jest-enzyme';
// ========================================================================================
import EditEvent from '../../components/EditEvent';
import EventForm from '../../components/EventForm';
// ========================================================================================
import { basicEvent } from '../stubs/event';
import { basicProfile } from '../stubs/profile'
// ========================================================================================

describe('<EditEvent />', () => {
	const userId    = { uid:  'abc123' };
	const history   = { push: jest.fn() };
	const onSubmit  = jest.fn();
	const component = shallow(
		<EditEvent 
			event={basicEvent} 
			profile={basicProfile} 
			auth={userId} 
			history={history}
			onSubmit={onSubmit}
		/>
	);
	
  it('should render correctly', () => {
    expect(component).toMatchSnapshot();
	});

	it('should render all child elements', () => {
		expect(component.containsAllMatchingElements([
			<EventForm />,
		])).toBeTruthy();
	})
});