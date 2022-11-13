import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

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

const initialState = {
	tuits: [],
	loading: false
}

const tuitsSlice = createSlice({
	name: 'tuits',
	// initialState: tuits,
	initialState,
	extraReducers: {
		[findTuitsThunk.pending]:
			(state) => {
				state.loading = true
				state.tuits = []
			},
		[findTuitsThunk.fulfilled]:
			(state, action) => {
				state.loading = false
				state.tuits = action.payload
			},
		[findTuitsThunk.rejected]:
			(state) => {
				state.loading = false
			},
		[deleteTuitThunk.fulfilled] :
			(state, { payload }) => {
				state.loading = false
				state.tuits = state.tuits
					.filter(t => t._id !== payload)
			},
		[createTuitThunk.fulfilled]:
			(state, { payload }) => {
				state.loading = false
				state.tuits.push(payload)
			},
		[updateTuitThunk.fulfilled]:
			(state, { payload }) => {
				state.loading = false
				const tuitNdx = state.tuits
					.findIndex((t) => t._id === payload._id)
				state.tuits[tuitNdx] = {
					...state.tuits[tuitNdx],
					...payload
				}
			}
		
	},

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