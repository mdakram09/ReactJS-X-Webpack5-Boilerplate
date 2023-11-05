// apiSaga.js
import { takeLatest, put, call } from "redux-saga/effects";
import { startLoading, fetchDataSuccess, fetchDataFailure } from "./crudSlice";
import * as apiService from "./apiServices"; // Import your API service functions

function* fetchApiData(action) {
	const { apiName, endpoint, formData } = action.payload;
	console.log("Akram action.payload: ", action.payload);

	try {
		yield put(startLoading({ apiName }));
		const response = yield call(apiService.fetchData, endpoint, formData); // Replace with your API call function
		yield put(fetchDataSuccess({ apiName, data: response }));
	} catch (error) {
		yield put(fetchDataFailure({ apiName, error: "error" }));
	}
}

function* watchFetchApiData() {
	yield takeLatest("api/fetchApiData", fetchApiData);
}

export default function* crudSaga() {
	yield watchFetchApiData();
}
