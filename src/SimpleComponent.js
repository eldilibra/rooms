import React from 'react';
import { connect } from 'react-redux';
import { getRoomThunk } from './redux/actions';


class SimpleComponent extends React.Component  {
	
	constructor(props) {
		super(props)

		props.getRoom();
	};

	render () {
		return (
			<div>
				<span>{this.props.room.name || "Loading..."}</span>
			</div>
		);
	}
};


const mapStateToProps = (state) => {
	return state;
}

const mapDispatchToProps = (dispatch) => ({
	getRoom() {
		dispatch(getRoomThunk())
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleComponent)