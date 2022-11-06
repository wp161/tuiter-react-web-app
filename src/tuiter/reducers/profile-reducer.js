import profile from "../data/profile.json";
import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
	name: 'profile',
	initialState: profile,
	reducers:{
		saveProfile(state, action){
			const newProfile = {
				...profile,
				...action.payload
			}
			return newProfile;
		}
	}
})

export const {saveProfile} = profileSlice.actions
export default profileSlice.reducer