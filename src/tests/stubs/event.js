import moment from 'moment';

const basicEvent = {
	eventName: "Cool Event Title",
	category: "sports",
	date: moment(0).add(4, 'days').valueOf(),
	description: "Lorem ipsum text",
	imageUrl: "https://image.com",
	interestedUsers: "none",
	location: "123 Elm St.",
	selectedUser: "none",
	time: "02:13",
	uid: "abc123",
	uninterestedUsers: "none",
	userId: "abc123",
	userName: "Rachel Deckard"
}

export { basicEvent };