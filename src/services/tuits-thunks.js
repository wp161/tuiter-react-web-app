import {createAsyncThunk}
	from "@reduxjs/toolkit"
import * as service
	from "./tuits-service"

export const findTuitsThunk = createAsyncThunk(
	'tuits/findTuits', async () =>{
		const data = await service.findTuits()
		return data;
	}
)

export const deleteTuitThunk = createAsyncThunk(
	'tuits/deleteTuit',
	async (tuitId) => {
		await service.deleteTuit(tuitId)
		return tuitId
	})

export const createTuitThunk = createAsyncThunk(
	'tuits/createTuit',
	async(content) => {
		const data = await service.createTuit(content)
		return data
	}
)

export const updateTuitThunk =
	createAsyncThunk(
		'tuits/updateTuit',
		async (tuit) =>
			await service.updateTuit(tuit)
	)




