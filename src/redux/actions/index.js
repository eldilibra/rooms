import { getRoom } from '../../fake-backend';
import { dispatch } from 'redux';

export const GET_ROOM_START = 'GET_ROOM_START';

export const GET_ROOM_SUCCESS = 'GET_ROOM_SUCCESS';

export function getRoomSuccess (room) {
	return {
		type: GET_ROOM_SUCCESS,
		payload: room
	};
};

export function getRoomThunk () {
	return (dispatch) => {
		dispatch({ type: GET_ROOM_START });

		getRoom().then(res => {
			dispatch(getRoomSuccess(res));
		});	
	};
};