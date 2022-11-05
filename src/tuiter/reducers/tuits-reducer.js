import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
	"userName": "NASA",
	"handle": "@nasa",
	"avatar_path": "nasa.png",
};

const templateTuit = {
	...currentUser,
	"topic": "Space",
	"time": "2h",
	"liked": false,
	"replies": 0,
	"retuits": 0,
	"likes": 0,
}

const tuitsSlice = createSlice({
	name: 'tuits',
	initialState: tuits,
	reducers: {
		createTuit(state, action) {
			const newTuit = {
				...action.payload,
				...templateTuit,
				"tuit_id": (new Date()).getTime(),
			}
			console.log(newTuit)
			console.log(tuits)
			state.push(newTuit)
			console.log(tuits)
			// state.unshift({
			// 	...action.payload,
			// 	...templateTuit,
			// 	_id: (new Date()).getTime(),
			// })
		},
		deleteTuit(state, action) {
			const index = state
				.findIndex(tuit =>
					tuit._id === action.payload);
			state.splice(index, 1);
		},
		
	}
});

export default tuitsSlice.reducer;
export const {createTuit, deleteTuit} = tuitsSlice.actions;