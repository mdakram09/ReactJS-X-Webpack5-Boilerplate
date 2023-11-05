/* eslint-disable no-param-reassign */
// crudSlice.js
import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	create: {
		loading: false,
		error: null,
		data: null
	},
	read: {
		loading: false,
		error: null,
		data: null
	},
	update: {
		loading: false,
		error: null,
		data: null
	},
	delete: {
		loading: false,
		error: null,
		data: null
	}
};

// Create an action using createAction
export const fetchApiData = createAction("api/fetchApiData");

const crudSlice = createSlice({
	name: "crud",
	initialState,
	reducers: {
		startLoading: (state, action) => {
			const { apiName } = action.payload;
			state[apiName].loading = true;
			state[apiName].error = null;
		},
		fetchDataSuccess: (state, action) => {
			const { apiName, data } = action.payload;
			state[apiName].loading = false;
			state[apiName].data = data;
		},
		fetchDataFailure: (state, action) => {
			const { apiName, error } = action.payload;
			state[apiName].loading = false;
			state[apiName].error = error;
		}
	}
});

export const { startLoading, fetchDataSuccess, fetchDataFailure } = crudSlice.actions;

export default crudSlice.reducer;
