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
	describe('basic functionality', () => {
		let userId, history, onSubmit, component, match, startEditEvent;
		beforeEach(() => {
			userId = { uid: 'abc123' };
			history = { push: jest.fn() };
			onSubmit = jest.fn();
			startEditEvent = jest.fn();
			match = { params: { id: 'xyz789' } }
			component = shallow(
				<EditEvent
				event={basicEvent}
				profile={basicProfile}
				auth={userId}
				history={history}
				onSubmit={onSubmit}
				match={match}
				startEditEvent={startEditEvent}
				/>
			);
		});
		
		it('should render correctly', () => {
			expect(component).toMatchSnapshot();
		});

		it('should render all child elements', () => {
			expect(component.containsAllMatchingElements([
				<EventForm />,
			])).toBeTruthy();
		});
		
		it('should handle onSubmit', () => {
			const urlParam = match.params.id;
			component.find('EventForm').prop('onSubmit')(basicEvent);
			expect(startEditEvent).toHaveBeenLastCalledWith(urlParam, basicEvent);
		});
	});
		
	describe('secureRoute', () => {
		it('will prevent anauthorized editing: will re-route if user is not the event owner', () => {
			const userId = { uid: 'abc123' };
			const history = { push: jest.fn() };
			const onSubmit = jest.fn();
			const startEditEvent = jest.fn();
			const match = { params: { id: 'xyz789' } }
			const component = shallow(
				<EditEvent
				event={basicEvent}
				profile={basicProfile}
				auth={userId}
				history={history}
				onSubmit={onSubmit}
				match={match}
				startEditEvent={startEditEvent}
				/>
			);
			expect(history.push).not.toHaveBeenCalledWith('/not-found');
		});
		
		it('will prevent anauthorized editing: will re-route if user is not the event owner', () => {
			const userId = { uid: 'xyz789' };    // userId !== event.uid
			const history = { push: jest.fn() };
			const onSubmit = jest.fn();
			const startEditEvent = jest.fn();
			const match = { params: { id: 'xyz789' } }
			const component = shallow(
				<EditEvent
				event={basicEvent}
				profile={basicProfile}
				auth={userId}
				history={history}
				onSubmit={onSubmit}
				match={match}
				startEditEvent={startEditEvent}
				/>
			);
			expect(history.push).toHaveBeenCalledWith('/not-found');
		});
	});
});