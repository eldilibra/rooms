import { combineReducers } from 'redux';

export default combineReducers({
	room: roomReducer
});

function roomReducer(state = {}, action) {
	console.log(state, action)
	switch (action.type) {
		case 'GET_ROOM_SUCCESS':
			return action.payload;
		default:
			return state
	}
};