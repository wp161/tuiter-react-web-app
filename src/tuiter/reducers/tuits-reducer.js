import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const currentUser = {
	"userName": "NASA",
	"handle": "@nasa",
	"image": "/images/nasa.png",
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
			// console.log(action)
			const newTuit = {
				...action.payload,
				...templateTuit,
				"_id": (new Date()).getTime(),
			}
			// console.log(newTuit)
			state.unshift(newTuit)
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