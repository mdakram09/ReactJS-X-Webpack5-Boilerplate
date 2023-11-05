// store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import crudReducer from "./crudSlice";
import crudSaga from "./crudSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		crud: crudReducer
	},
	middleware: [sagaMiddleware]
});

sagaMiddleware.run(crudSaga);

export default store;
