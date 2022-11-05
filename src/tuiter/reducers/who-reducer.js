import whoArray from "../data/who.json"
import {createSlice} from "@reduxjs/toolkit";

const whoSlice = createSlice({
	name: "who",
	initialState: whoArray
})

export default whoSlice.reducer